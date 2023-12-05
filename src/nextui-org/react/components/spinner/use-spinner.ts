import type { SlotsToClasses, SpinnerSlots, SpinnerVariantProps } from "../../core/theme";

import {HTMLYooUIProps, PropGetter} from "../../core/system/types";
import {mapPropsVariants} from "../../core/system";

import { spinner } from "../../core/theme";
import {ReactRef, useDOMRef} from "../../core/utilities/react-utils";
import {useMemo, useCallback, Ref} from "react";
import { clsx } from "../../core/utilities/shared-utils";

interface Props extends HTMLYooUIProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Spinner classNames={{
   *    base:"base-classes",
   *    wrapper: "wrapper-classes",
   *    circle1: "circle1-classes",
   *    circle2: "circle2-classes",
   *    label: "label-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<SpinnerSlots>;
}

export type UseSpinnerProps = Props & SpinnerVariantProps;

export function useSpinner(originalProps: UseSpinnerProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);

  const {children, className, classNames, label: labelProp, ...otherProps} = props;

  const slots = useMemo(() => spinner({...variantProps}), [...Object.values(variantProps)]);

  const baseStyles = clsx(classNames?.base, className);

  const label = labelProp || children;

  const ariaLabel = useMemo(() => {
    if (label && typeof label === "string") {
      return label;
    }

    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);

  const getSpinnerProps = useCallback<PropGetter>(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles,
      }),
      ...otherProps,
    }),
    [ariaLabel, slots, baseStyles, otherProps],
  );

  return {label, slots, classNames, getSpinnerProps};
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>;
