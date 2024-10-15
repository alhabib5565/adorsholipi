import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAlluser);
router.get('/:id', UserController.getSingleUser);
router.patch('/:id', UserController.updateUser);

export const user_router = router;
