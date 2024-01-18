"use client";
import { logout } from "@/action/logout";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
      <ThemeSwitcher />
      <a href="/auth/login"> login </a>
      <Button onClick={() => logout()}>Logout</Button>
    </main>
  );
}
