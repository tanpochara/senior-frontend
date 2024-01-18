"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
      <ThemeSwitcher />
    </main>
  );
}
