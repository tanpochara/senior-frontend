import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(2, {
    message: "Please enter a valid password",
  }),
});
