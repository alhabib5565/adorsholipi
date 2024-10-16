/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { TKidsAccount } from './kidsAccount.interface';
import { KidsAccount } from './kidsAccount.model';
import { User } from '../user/user.model';
import { sendFileToCloudinary } from '../../utils/sendFileToCloudinary';

const createKidsAccount = async (payload: TKidsAccount) => {
  const isParentExist = await User.findById(payload.parentId);
  if (!isParentExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Parent not found');
  }
  const isThisKidsAlreadyExist = await KidsAccount.findOne({
    kidsName: payload.kidsName,
    parentId: payload.parentId,
  });

  if (isThisKidsAlreadyExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This Kids already exist');
  }
  const result = await KidsAccount.create(payload);
  return result;
};

const getAllKidsAccount = async () => {
  const result = await KidsAccount.find();
  return result;
};

const getSignleKidsAccount = async (kidsId: string) => {
  const result = await KidsAccount.findById(kidsId);
  return result;
};

//voice upload or edit
const uploadKidsVoice = async (file: any, kidsId: string) => {
  if (!file) {
    throw new AppError(httpStatus.NOT_FOUND, 'Voice File not found');
  }
  const uploadedFileInfo: any = await sendFileToCloudinary({
    fileName: file.originalname,
    fileBuffer: file.buffer,
    resource_type: 'raw',
  });
  const voiceURL = uploadedFileInfo?.secure_url;

  const result = await KidsAccount.findOneAndUpdate(
    { _id: kidsId },
    { voice: voiceURL },
    { new: true },
  );
  return result;
};

const editKidsAccount = async (
  kidsId: string,
  paylod: Partial<TKidsAccount>,
) => {
  const result = await KidsAccount.findOneAndUpdate({ _id: kidsId }, paylod, {
    new: true,
  });

  return result;
};

export const KidsAccountService = {
  createKidsAccount,
  uploadKidsVoice,
  editKidsAccount,
  getAllKidsAccount,
  getSignleKidsAccount,
};
