import { z } from 'zod';

const createProductSchema = z.object({
  productName: z.string().min(1, { message: 'Product name is required' }),
  productType: z.string().min(1, { message: 'Product type is required' }),
  productPrice: z
    .number()
    .positive({ message: 'Product price must be positive' }),
  // productLogo: z.instanceof(File, { message: 'Product logo must be a file' }),
  // productCoverImage: z.instanceof(File, {
  //   message: 'Product cover image must be a file',
  // }),
  aboutProduct: z.string().min(1, { message: 'About product is required' }),
});

export const ProductValidation = {
  createProductSchema,
};
