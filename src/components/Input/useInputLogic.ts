import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { InputValue } from "../../domain/entities/field";
import { setInputElementOwnProperty, setTextareaElementOwnProperty } from "../../utils/setHtmlElementOwnProperty";

type InputLogicHook = {
  innerRef: React.MutableRefObject<HTMLInputElement | null>;
  inputValue: InputValue;
  setInputValue: (value: InputValue) => void;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  onClearHandler: () => void;
};

type InputLogicProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isTextArea?: boolean;
  value: InputValue;
};

type UseInputLogicHook = (props: InputLogicProps, ref: React.ForwardedRef<HTMLInputElement>) => InputLogicHook;

export const useInputLogic: UseInputLogicHook = ({ onChange, value, isTextArea }, ref) => {
  const innerRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<InputValue>(value ?? "");

  // @ts-ignore
  useImperativeHandle(ref, () => innerRef.current);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  const onClearHandler = () => {
    if (innerRef.current) {
      const inputTarget = innerRef.current;
      const setOwnPropertyFunction = isTextArea ? setTextareaElementOwnProperty : setInputElementOwnProperty;
      setOwnPropertyFunction(inputTarget, "value", null);
      if (inputTarget.type === "number") {
        setOwnPropertyFunction(inputTarget, "valueAsNumber", NaN);
      }
      inputTarget.dispatchEvent(new Event("change", { bubbles: true }));
      inputTarget.dispatchEvent(new Event("input", { bubbles: true }));
      inputTarget.focus();
    }
  };

  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);

  return {
    innerRef,
    inputValue,
    setInputValue,
    onChangeHandler,
    onClearHandler,
  };
};
