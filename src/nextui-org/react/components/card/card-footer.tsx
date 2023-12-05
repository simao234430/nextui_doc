import {forwardRef, HTMLYooUIProps} from "@nextui-org/core/system";
import {useDOMRef} from "@nextui-org/core/utilities/react-utils";
import {clsx} from "@nextui-org/core/utilities/shared-utils";

import {useCardContext} from "./card-context";

export interface CardFooterProps extends HTMLYooUIProps<"div"> {}

const CardFooter = forwardRef<"div", CardFooterProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const footerStyles = clsx(classNames?.footer, className);

  return (
    <Component ref={domRef} className={slots.footer?.({class: footerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardFooter.displayName = "NextUI.CardFooter";

export default CardFooter;
