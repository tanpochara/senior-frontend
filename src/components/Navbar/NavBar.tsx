import Image from "next/image";
import { Typography } from "../ui/typography";
import { LanguageDropdown } from "./LanguageDropdown";
import { AuthButtons } from "./AuthButtons";
import { auth } from "@/auth";
import { Link } from "@/navigation";

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
const NavBar: React.FC = async () => {
  const session = await auth();
  return (
    <div className="flex flex-row item-center justify-between py-3 px-10">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
        </Link>
        {NavItems.map((item) => {
          return (
            <Link key={item.title} href={item.url}>
              <Typography variant="body1" className="font-bold">
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-4">
        <LanguageDropdown />
        <div className="h-full border-l-2" />
        {session ? (
          <h1> logged in</h1>
        ): (
          <AuthButtons />
        )}
      </div>
    </div>
  );
};

export { NavBar };
