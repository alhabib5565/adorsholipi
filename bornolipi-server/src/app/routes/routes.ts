import express from 'express';
import { user_router } from '../module/user/user.route';
import { authRouter } from '../module/auth/auth.route';

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
];

appRoutes.map((routes) => router.use(routes.path, routes.routes));

export const routes = router;
