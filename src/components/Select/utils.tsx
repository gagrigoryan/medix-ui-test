import { CSSObjectWithLabel } from "react-select";

export const getSelectStyles = (): any => ({
  control: (base: CSSObjectWithLabel, state: any) => ({
    ...base,
    borderColor: state.isFocused ? "#2dbbc7" : "",
    boxShadow: "none",
  }),
  indicatorsContainer: (base: CSSObjectWithLabel, state: any) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  valueContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    paddingRight: "0",
  }),
});
