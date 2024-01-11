import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
    // add more functionality
      .string()
      .min(8, { message: "Password must be at least a 8 characters long." }),
  });

  export type TAuthCredentialsValidator = z.infer<
    typeof AuthCredentialsValidator
  >;