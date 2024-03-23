import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const typographyVariants = cva(
    "font-sans",
    {
        variants: {
          variant: {
            h1: "text-4xl font-bold",
            h2: "text-3xl font-bold",
            h3: "text-2xl font-bold",
            h4: "text-xl font-bold",
            h5: "text-lg font-bold",
            body1: "text-base",
            body2: "text-sm",
            subtitle: "text-sm font-medium",
          },
        },
        defaultVariants: {
          variant: "body1",
        },
      }
)

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {}

const Typography: React.FC<TypographyProps> = ({ className, variant, ...props }) => {
    return (
        <p className={typographyVariants({ variant, className })} {...props} />
    )
}

export { Typography, typographyVariants }