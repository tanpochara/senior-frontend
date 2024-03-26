import { Link } from "@/navigation";
import { Typography } from "../ui/typography";
import { useTranslations } from "next-intl";

export const AuthButtons: React.FC = () => {
  const t = useTranslations("Navbar")
  return (
    <>
      <Link href="/auth/login" className="mr-3">
        <Typography variant="body1" className="font-bold">
          {t("login")}
        </Typography>
      </Link>
      <Link href="/auth/signup" className="bg-primary py-2 px-4 rounded-3xl">
        <Typography variant="body1" className="text-white">
          {t("signup")}
        </Typography>
      </Link>
    </>
  );
};
