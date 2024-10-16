import express, { NextFunction, Request, Response } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductController } from './product.controller';
import { upload } from '../../utils/sendFileToCloudinary';

const router = express.Router();

router.post(
  '/create-product',
  upload.fields([
    { name: 'productLogo', maxCount: 1 },
    { name: 'productCoverImage', maxCount: 1 },
  ]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(ProductValidation.createProductSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getOneProduct);
router.patch('/:id', ProductController.editProduct);

export const productRouter = router;
