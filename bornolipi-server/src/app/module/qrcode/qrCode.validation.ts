import { z } from 'zod';

const createQrCodeValidationShema = z.object({
  uniqueCode: z.union(
    [
      z.string().min(1, { message: 'uniqueCode is required' }),
      z.array(
        z.string().min(1, {
          message: 'Each uniqueCode in the array must be a non-empty string.',
        }),
      ),
    ],
    { message: 'uniqueCode must be a string or an array of strings.' },
  ),
});

const changePrintStatusValidationSchema = z
  .array(z.string())
  .min(1, { message: 'Please provide unique code' });

export const QrCodeValidation = {
  createQrCodeValidationShema,
  changePrintStatusValidationSchema,
};
