import { z } from 'zod';

const createUserFeedbackSchema = z.object({
  message: z.string().min(1, 'Message is required'),
});

export const userFeedbackValidation = {
  createUserFeedbackSchema,
};
