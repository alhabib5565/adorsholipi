import express from 'express';
import { user_router } from '../module/user/user.route';
import { authRouter } from '../module/auth/auth.route';
import { qrCodeRouter } from '../module/qrcode/qrCode.route';
import { kidsAccountRouter } from '../module/kidsAccount/kidsAccount.route';
import { userFeedbackRouter } from '../module/userFeedback/userFeedback.route';
import { productRouter } from '../module/product/product.route';

const router = express.Router();

const appRoutes = [
  {
    path: '/users',
    routes: user_router,
  },
  {
    path: '/auth',
    routes: authRouter,
  },
  {
    path: '/qr-codes',
    routes: qrCodeRouter,
  },
  {
    path: '/feedbacks',
    routes: userFeedbackRouter,
  },
  {
    path: '/products',
    routes: productRouter,
  },
  {
    path: '/kids-accounts',
    routes: kidsAccountRouter,
  },
];

appRoutes.map((routes) => router.use(routes.path, routes.routes));

export const routes = router;
