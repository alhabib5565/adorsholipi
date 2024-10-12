import { model, Schema } from 'mongoose';
import { TKidsVoice } from './voice.interface';

const voiceSchema = new Schema<TKidsVoice>(
  {
    voice: {
      type: String,
      required: true,
    },
    kidsId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Voice = model('Voice', voiceSchema);
