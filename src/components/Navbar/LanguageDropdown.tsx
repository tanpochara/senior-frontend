"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Typography } from "../ui/typography";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";

const icons: Record<string, string> = {
  en: "/en.svg",
  th: "/th.svg",
};

export const LanguageDropdown: React.FC = () => {
  const params = useParams();
  const currentPath = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState(params.locale as string || "en");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    router.replace(currentPath, {locale: value})
  }
    

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex flex-row items-center gap-2">
          <Image src={icons[language]} alt="logo" width={25} height={20} />
          <Typography variant="body1" className="font-bold">
            {language}
          </Typography>
          <FaAngleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuRadioGroup value={language} onValueChange={handleLanguageChange}>
          <DropdownMenuRadioItem className="bg-white" value="en">
            english
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="bg-white" value="th">
            thai
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
