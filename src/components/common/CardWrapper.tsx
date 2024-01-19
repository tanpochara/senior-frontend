"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper: React.FC<Props> = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) => (
  <Card className="w-[400px] shadow-md">
    <CardHeader>
      <h1 className="text-2xl font-bold">{headerLabel}</h1>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocial && (
      <CardFooter>
        <h2> {showSocial} </h2>
      </CardFooter>
    )}
    <CardFooter>
      <a href={backButtonHref}> {backButtonLabel} </a>
    </CardFooter>
  </Card>
);
