import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be at least a characters long." }),
  });

  export type TAuthCredentialsValidator = z.infer<
    typeof AuthCredentialsValidator
  >;