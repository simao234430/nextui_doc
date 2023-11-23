 
import {forwardRef} from "@nextui-org/system";

import {UseButtonProps, useButton} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<"button", ButtonProps>((props, ref) => {
  const {
    Component,
    children,
    styles,
 
  } = useButton({...props, ref});

  return (
    <Component className={styles}>
 {children}
    </Component>
  );
});

Button.displayName = "yoo.Button";

export default Button;