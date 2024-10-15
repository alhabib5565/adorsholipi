import express from 'express';
import { UserFeedbackController } from './userFeedback.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { userFeedbackValidation } from './userFeedback.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-feedback',
  validateRequest(userFeedbackValidation.createUserFeedbackSchema),
  auth(),
  UserFeedbackController.createUserFeedback,
);

router.get('/', UserFeedbackController.getAllUserFeedback);
router.get('/:id', UserFeedbackController.getOneUserFeedback);
router.patch('/:id', UserFeedbackController.editUserFeedback);

export const userFeedbackRouter = router;
