import {forwardRef} from "../../core/system/utils"

import { UseSpacerProps, useSpacer } from "./use-spacer";

export interface SpacerProps extends UseSpacerProps {}

const Spacer = forwardRef<"span", SpacerProps>((props, ref) => {
  const {Component, getSpacerProps} = useSpacer({...props});

  return <Component ref={ref} {...getSpacerProps()} />;
});

Spacer.displayName = "Yoo.Spacer";

export default Spacer;
