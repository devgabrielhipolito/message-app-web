import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter email valid." }),
  password: z.string({ message: "enter your password" }),
});

export const createAccountSchema = z.object({
  email: z.string().email({ message: "Enter email valid." }),
  firstName: z.string({ message: "Enter your fisrtName" }),
  lastName: z.string({ message: "Enter your lastName" }),
  number: z.string({ message: "Enter your lastName" }),
  password: z.string({ message: "enter your password" }),
  confirmPassword: z.string({ message: "confirm your password" }),
  birthday: z.string(),
});

export type LoginType = z.infer<typeof loginSchema>;
export type CreateAccountType = z.infer<typeof createAccountSchema>;
