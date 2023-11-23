import { useMemo } from "react";
import { button } from "./styles/button";

 interface Props extends HTMLNextUIProps<"button"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * Whether the button should display a ripple effect on press.
   * @default false
   */
  disableRipple?: boolean;
  /**
   * The button start content.
   */
  startContent?: ReactNode;
  /**
   * The button end content.
   */
  endContent?: ReactNode;
  /**
   * Spinner to display when loading.
   * @see https://nextui.org/components/spinner
   */
  spinner?: ReactNode;
  /**
   * The spinner placement.
   * @default "start"
   */
  spinnerPlacement?: "start" | "end";
  /**
   * Whether the button should display a loading spinner.
   * @default false
   */
  isLoading?: boolean;
  /**
   * The native button click event handler.
   * use `onPress` instead.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type UseButtonProps = Props &
  Omit<AriaButtonProps, keyof ButtonVariantProps> &
  Omit<ButtonVariantProps, "isInGroup">;

export function useButton(props: UseButtonProps) {
 

  const {
    ref,
    as,
    children,
    size,
    color,
 
    className,
    onClick,
    ...otherProps
  } = props;

  const Component = as || "button";
 

  const styles = useMemo(
    () =>
      button({
        size,
        color,
        className,
      }),
    [
      size,
      color,
      className,
    ],
  );



  return {
    Component,
    children,
    styles
  };
}

export type UseButtonReturn = ReturnType<typeof useButton>;
