import { model, Schema } from 'mongoose';
import { TKidsAccount } from './kidsAccount.interface';
import { GENDER } from './kidsAccount.constant';

const kidsAccountSchema = new Schema<TKidsAccount>(
  {
    voice: {
      type: String,
      required: false,
    },
    parentId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Parent ID is required'],
      ref: 'User',
    },
    kidsName: {
      type: String,
      required: [true, "Kid's name is required"],
    },
    gender: {
      type: String,
      enum: {
        values: Object.values(GENDER),
        message: '{VALUE} is not supported',
      },
      required: [true, 'Gender is required'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const KidsAccount = model('KidsAccount', kidsAccountSchema);
