/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendFileToCloudinary } from '../../utils/sendFileToCloudinary';
import { TKidsVoice } from './voice.interface';
import { Voice } from './voice.model';

const uploadKidsVoice = async (file: any, paylod: TKidsVoice) => {
  const uploadedFileInfo: any = await sendFileToCloudinary(
    file.originalname,
    file.buffer,
  );
  const voiceURL = uploadedFileInfo?.secure_url;
  paylod.voice = voiceURL;
  const result = await Voice.create(paylod);
  return result;
};

const editKidsVoice = async (file: any, paylod: Partial<TKidsVoice>) => {
  const uploadedFileInfo: any = await sendFileToCloudinary(
    file.originalname,
    file.buffer,
  );
  const voiceURL = uploadedFileInfo?.secure_url;
  const result = await Voice.findOneAndUpdate(
    { kidsId: paylod.kidsId },
    { voice: voiceURL },
    { new: true },
  );

  return result;
};

export const VoiceService = {
  uploadKidsVoice,
  editKidsVoice,
};
