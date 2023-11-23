import type {VariantProps} from "tailwind-variants";

import {tv} from "../../_utils/tv";
 
 
const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    // focus ring
 
  ],
 
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium  ",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent",
    },
    size: {
      sm: "px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2  ",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 border-rose-600 border-3 text-bule-500 rounded-medium",
      lg: "px-unit-6 min-w-unit-24 h-unit-12 text-4xl gap-unit-3  text-bule-500  rounded-large",
    },
    color: {
      default: "#0ea5e9",
      primary: "#0ea5e9",
      secondary: "#0ea5e9",
      success: "#23C343",
      warning: "#FBE842",
      danger: "#F53F3F",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    disableAnimation: false,
  },

  compoundVariants: [
      // light / color
      {
 
        color: "default",
        class: ["bg-blue-500"],
      },
      {
 
        color: "primary",
        class: ["bg-primary/20"],
      },
      {
 
        color: "secondary",
        class: ["bg-secondary/20"],
      },
      {
 
        color: "success",
        class: ["bg-success"],
      },
      {
        color: "warning",
        class: ["bg-warning/20"],
      },
      {
 
        color: "danger",
        class: ["bg-danger/20"],
      },
    ]
});

 
export type ButtonVariantProps = VariantProps<typeof button>;

export {button};
