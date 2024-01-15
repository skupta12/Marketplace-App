"use client";

import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  TAuthCredentialsValidator, 
  AuthCredentialsValidator, 
} from "@/lib/validators/account-credentials-validator";
import { ZodError, z } from "zod"
import { trpc } from "@/trpc/client";
import { toast } from 'sonner'
import { useRouter } from "next/navigation";

const Page = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const router = useRouter()

  const { mutate, isLoading } = 
  trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("This email is already in use. Sign in instead?") // layout.tsx Toaster
        return
      }
      
      // if we correctly pass the input
      if (err instanceof ZodError) {
        toast.error(err.issues[0].message)
        return
      }

      toast.error("Something went wrong. Please try again.")
    },
    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification email sent to ${sentToEmail}.`)
      router.push("/verify-email?to=" + sentToEmail)
    }
  })

  const onSubmit = ({
    email, 
    password,
  }: TAuthCredentialsValidator) => {
    mutate({ email, password })
  }
  // send data to the server

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label className="mb-2" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder="your@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label className="mb-2" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    {...register("password")}
                    type="password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                  <div className="grid gap-1 py-2">
                  <Label className="mb-2" htmlFor="phoneNumber">
                    Phone number (optional)
                  </Label>
                  <Input
                    // {...register("password")}
                    type="tel"
                    className={cn({
                      "focus-visible:ring-red-500": false,
                    })}
                    placeholder="Password"
                  />
                  {/* {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )} */}
                </div>      
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
