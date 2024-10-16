import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { ProductService } from './product.service';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const files = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };

  const result = await ProductService.createProduct(files, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Created product successfully.',
    data: result,
  });
});

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProduct();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Get All product successfully.',
    data: result,
  });
});

const getOneProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getOneProduct(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Get one product successfully.',
    data: result,
  });
});

const editProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.editProduct(req.params.id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Edit product successfully.',
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getAllProduct,
  getOneProduct,
  editProduct,
};
