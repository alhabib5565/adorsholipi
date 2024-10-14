import { z } from 'zod';
import { GENDER } from './kidsAccount.constant';

const createKidsAccountSchema = z.object({
  voice: z.string().optional(),
  parentId: z
    .string()
    .min(1, { message: 'Parent ID is required and cannot be empty' }),
  kidsName: z
    .string()
    .min(1, { message: "Kids' name is required and cannot be empty" }),
  gender: z.enum([GENDER.Female, GENDER.Male], {
    message: 'Gender must be one of the following: Male Or Female',
  }),
  age: z.number().min(0, { message: 'Age must be a positive number or zero' }),
  avatar: z.string().optional(),
});

export const kidsAccountValidation = { createKidsAccountSchema };
