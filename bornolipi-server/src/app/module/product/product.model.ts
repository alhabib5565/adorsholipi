import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({
  productName: { type: String, required: true },
  productType: { type: String, required: true },
  productPrice: { type: Number, required: true, min: 0 },
  productLogo: { type: String, required: true },
  productCoverImage: { type: String, required: true },
  aboutProduct: { type: String, required: true },
});

export const Product = model('Product', productSchema);
