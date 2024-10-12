import express, { NextFunction, Request, Response } from 'express';
import { upload } from '../../utils/sendFileToCloudinary';
import { VoiceController } from './voice.controller';

const route = express.Router();

route.post(
  '/voice-upload',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  VoiceController.uploadKidsVoice,
);
route.patch(
  '/edit-voice',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  VoiceController.editKidsVoice,
);

export const voiceRoute = route;
