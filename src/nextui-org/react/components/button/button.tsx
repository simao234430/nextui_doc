 
import { forwardRef } from '../../core/system/utils'
import { Ripple } from '../ripple';
import { Spinner } from '../spinner';
import { UseButtonProps, useButton } from './use-button'

export interface ButtonProps extends UseButtonProps {}

const Button = forwardRef<"button", ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
  } = useButton({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...getButtonProps()}>
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});


Button.displayName = 'Yoo.Button'

export default Button