/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import { sendFileToCloudinary } from '../../utils/sendFileToCloudinary';

const createProduct = async (files: any, payload: TProduct) => {
  const productLogo = files['productLogo'] ? files['productLogo'][0] : null;
  const productCoverImage = files['productCoverImage']
    ? files['productCoverImage'][0]
    : null;

  if (!productLogo || !productCoverImage) {
    if (!productLogo || !productCoverImage) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Both product logo and cover image are required',
      );
    }
  }

  const coverImageInfo: any = await sendFileToCloudinary({
    fileName: productCoverImage.originalname,
    fileBuffer: productCoverImage.buffer,
    resource_type: 'image',
  });
  payload.productCoverImage = coverImageInfo?.secure_url;

  const logoInfo: any = await sendFileToCloudinary({
    fileName: productLogo.originalname,
    fileBuffer: productLogo.buffer,
    resource_type: 'image',
  });
  payload.productLogo = logoInfo?.secure_url;

  const result = await Product.create(payload);
  return result;
};

const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};

const getOneProduct = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const editProduct = async (product_id: string, paylod: Partial<TProduct>) => {
  const result = await Product.findOneAndUpdate({ _id: product_id }, paylod, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getOneProduct,
  editProduct,
};
