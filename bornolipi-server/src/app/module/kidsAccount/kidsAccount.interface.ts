import { Types } from 'mongoose';
import { GENDER } from './kidsAccount.constant';

export type TKidsAccount = {
  voice?: string;
  parentId: Types.ObjectId;
  kidsName: string;
  gender: TGender;
  age: number;
  avatar?: string;
};

export type TGender = keyof typeof GENDER;
