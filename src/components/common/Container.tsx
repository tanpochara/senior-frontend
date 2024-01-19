import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  maxW?: string;
  className?: string;
}
export const Container: React.FC<Props> = ({
  children,
  maxW = "lg",
  className,
}) => <div className={cn(`mx-auto max-w-${maxW}`, className)}>{children}</div>;
