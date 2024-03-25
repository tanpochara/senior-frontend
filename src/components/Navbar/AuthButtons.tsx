import { Typography } from "../ui/typography";

export const AuthButtons: React.FC = () => {
  return (
    <>
      <a href="/auth/login" className="mr-3">
        <Typography variant="body1" className="font-bold">
          Login
        </Typography>
      </a>
      <a href="/auth/signup" className="bg-primary py-2 px-4 rounded-3xl">
        <Typography variant="body1" className="text-white">
          Sign Up
        </Typography>
      </a>
    </>
  );
};
