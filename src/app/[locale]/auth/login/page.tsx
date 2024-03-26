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
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("LoginPage");
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
        headerLabel={t('login')}
        backButtonLabel={t('back')}
        backButtonHref="/"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
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
                  <FormLabel>{t('password')}</FormLabel>
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
              {t('submit')}
            </Button>
            <Typography variant='body2' className="text-right mt-2">
              {t('noAccount')}
              <Link href='/auth/signup' className="text-primary"> {t('signup')} </Link>
            </Typography>
          </form>
        </Form>
      </CardWrapper>
    </AuthLayout>
  );
};

export default LoginPage;
