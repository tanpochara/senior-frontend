"use client";
import { LoginSchema } from "@/schema/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CardWrapper } from "@/components/common/CardWrapper";
import { login } from "@/action/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { Container } from "@/components/common/Container";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Typography } from "@/components/ui/typography";

const LoginPage = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    setIsPending(true);

    login(data)
      .then((data) => {
        if (data?.error) {
          setError(data.error);
        } else {
          setSuccess("Success");
        }
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <AuthLayout position="right">
      <CardWrapper
        headerLabel="Login"
        backButtonLabel="Back"
        backButtonHref="/"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="john.doe@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} className="w-full mt-4">
              submit
            </Button>
            <Typography variant='body2' className="text-right mt-2">
              {"Don't have an account?"}
              <a href='/auth/signup' className="text-primary"> signup </a>
            </Typography>
          </form>
        </Form>
      </CardWrapper>
    </AuthLayout>
  );
};

export default LoginPage;
