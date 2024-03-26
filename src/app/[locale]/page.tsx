import { logout } from "@/action/logout";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h1">{t('title')}</Typography>
    </main>
  );
}