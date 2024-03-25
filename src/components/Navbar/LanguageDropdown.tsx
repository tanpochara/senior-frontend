"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Typography } from "../ui/typography";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";

const icons: Record<string, string> = {
    "en": '/en.svg',
    "th": '/th.svg'
}

export const LanguageDropdown: React.FC = () => {
  const [position, setPosition] = useState("en");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex flex-row items-center gap-2">
            <Image src={icons[position]} alt="logo" width={25} height={20} />
          <Typography variant="body1" className="font-bold">
            {position}
          </Typography>
          <FaAngleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
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
