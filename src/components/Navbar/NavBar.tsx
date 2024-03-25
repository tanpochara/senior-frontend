import Image from "next/image";
import { Typography } from "../ui/typography";
import { LanguageDropdown } from "./LanguageDropdown";

const NavItems = [
  {
    title: "Organizations",
    url: "/organizations",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];
const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row item-center justify-between py-3 px-10">
      <div className="flex flex-row items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
        {NavItems.map((item) => {
          return (
            <a key={item.title} href={item.url}>
              <Typography variant='body1' className="font-bold">{item.title}</Typography>
            </a>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-4">
        <LanguageDropdown />
        <div className="h-full border-l-2" />
        <a href="/auth/login" className="mr-3">
            <Typography variant='body1' className="font-bold">Login</Typography>
        </a>
        <a href="/auth/signup" className='bg-primary py-2 px-4 rounded-3xl'>
            <Typography variant='body1' className="text-white">Sign Up</Typography>
        </a>
      </div>
    </div>
  );
};

export { NavBar };
