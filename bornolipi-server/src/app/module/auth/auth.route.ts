import express from 'express';
import { AuthController } from './auth.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { UserValidation } from '../user/user.validation';
import { AuthValidation } from './auth.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/register-user',
  validateRequest(UserValidation.createUserValidationSchema),
  AuthController.registerUser,
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginUserValidationSchema),
  AuthController.loginUser,
);

router.post('/refresh-toekn', auth(), AuthController.refreshToken);

export const authRouter = router;
