import express from 'express';
import { user_router } from '../module/user/user.route';
import { authRouter } from '../module/auth/auth.route';
import { qrCodeRouter } from '../module/qrcode/qrCode.route';
import { voiceRoute } from '../module/voice/voice.route';

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
    path: '/voices',
    routes: voiceRoute,
  },
];

appRoutes.map((routes) => router.use(routes.path, routes.routes));

export const routes = router;
