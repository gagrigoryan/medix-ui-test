import React, { memo } from "react";

type MaskedTextProps = {
  value: string;
  searchedText?: string;
  as?: React.JSXElementConstructor<any> | string;
  className?: string;
  selectedClassName?: string;
};

const getMatchedText = (text: string, searchedText: string): string[] => {
  const regExp = new RegExp(searchedText);
  return text.split(regExp);
};

const MaskedText: React.FC<MaskedTextProps> = ({ as = "p", value, searchedText, selectedClassName, className }) => {
  const Element = as;

  const matchedText = getMatchedText(value, searchedText ?? "");

  return (
    <Element className={className}>
      {matchedText.map((text) => (
        <>
          {text}
          <span className={selectedClassName}>{searchedText}</span>
        </>
      ))}
    </Element>
  );
};

export default memo(MaskedText);
