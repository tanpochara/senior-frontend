"use client";
import { logout } from "@/action/logout";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
      <a href="/auth/login"> login </a>
      <Button onClick={() => logout()}>Logout</Button>
      <Typography variant='h1'>Hello World</Typography>
      <Typography variant='h2'>Hello World</Typography>
      <Typography variant='h3'>Hello World</Typography>
      <Typography variant='h4'>Hello World</Typography>
      <Typography variant='h5'>Hello World</Typography>
      <Typography variant='body1'>Hello World</Typography>
      <Typography variant='body2'>Hello World</Typography>
      <Typography variant='subtitle'>Hello World</Typography>
    </main>
  );
}
