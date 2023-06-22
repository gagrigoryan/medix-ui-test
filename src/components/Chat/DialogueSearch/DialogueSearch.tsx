import React, { useRef, useState } from "react";
import styles from "./DialogueSearch.module.scss";
import { Input } from "../../Input";
import { ArrowLeftIcon, MenuIcon, SearchIcon, StarIcon } from "../../Icons";
import { IconButton } from "../../Button";
import { EIconSize } from "../../../domain/entities/icon";
import { Dropdown } from "../../Dropdown";

const dropdownOptions = [
  {
    value: "favourite",
    label: "Favourite messages",
    icon: <StarIcon size={EIconSize.Small} />,
  },
];

const DialogueSearch: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const onIconClickHandler = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {isDropdownVisible && (
        <Dropdown options={dropdownOptions} triggerRef={buttonRef} onClose={() => setDropdownVisible(false)} />
      )}
      <div className={styles.wrapper}>
        {inputValue ? (
          <IconButton className={styles.button} icon={<ArrowLeftIcon size={EIconSize.Small} />} />
        ) : (
          <IconButton
            ref={buttonRef}
            className={styles.button}
            onClick={onIconClickHandler}
            icon={<MenuIcon size={EIconSize.Small} />}
          />
        )}
        <Input
          placeholder="Search"
          className={styles.labelContainer}
          label=""
          isClearable
          suffixIcon={<SearchIcon />}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default DialogueSearch;
