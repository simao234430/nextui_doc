import {forwardRef, HTMLYooUIProps} from "@nextui-org/core/system";
import {useDOMRef} from "@nextui-org/core/utilities/react-utils";
import {clsx} from "@nextui-org/core/utilities/shared-utils";

import {useCardContext} from "./card-context";

const CardBody = forwardRef<"div", HTMLYooUIProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const bodyStyles = clsx(classNames?.body, className);

  return (
    <Component ref={domRef} className={slots.body?.({class: bodyStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardBody.displayName = "NextUI.CardBody";

export default CardBody;
