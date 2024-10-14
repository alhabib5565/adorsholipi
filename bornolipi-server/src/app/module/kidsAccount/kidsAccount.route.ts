import express from 'express';

// import { Request, Response, NextFunction } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { kidsAccountValidation } from './kidsAccount.validation';
import { KidsAccountController } from './kidsAccount.controller';
import { upload } from '../../utils/sendFileToCloudinary';

const router = express.Router();

router.get('/', KidsAccountController.getAllKidsAccount);
router.get('/:id', KidsAccountController.getSignleKidsAccount);

router.post(
  '/create-kids-account',
  validateRequest(kidsAccountValidation.createKidsAccountSchema),
  KidsAccountController.createKidsAccount,
);

router.patch(
  '/voice-upload/:id',
  upload.single('file'),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  KidsAccountController.uploadKidsVoice,
);

router.patch('/edit-kids-account/:id', KidsAccountController.editKidsAccount);

export const kidsAccountRouter = router;
