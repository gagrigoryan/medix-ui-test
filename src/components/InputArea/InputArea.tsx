import React, { useEffect, useState } from "react";
import styles from "./InputArea.module.scss";
import clsx from "clsx";
import EditorActionWrapper from "./EditorActionWrapper";
import { useInputAreaLogic } from "./useInputAreaLogic";
import { IconButton } from "../Button";
import { CloseIcon } from "../Icons";
import { EIconSize } from "../../domain/entities/icon";
import { getCurrentPlainText } from "./utils";
import { InputAreaProps } from "./InputAreaProps";

const Editor = React.lazy(() => import("react-draft-wysiwyg").then((module) => ({ default: module.Editor })));

const InputArea: React.FC<InputAreaProps> = ({
  label,
  description,
  isRequired,
  isClearable,
  isDisabled,
  error,
  ...props
}) => {
  const [isReady, setReady] = useState(false);
  const {
    editorRef,
    placeholder,
    editorState,
    setEditorState,
    isFocused,
    selectedActionTypeList,
    onBlurHandler,
    onFocusHandler,
    onChangeHandler,
    clearEditor,
    onInlineStyleClickHandler,
    onBlockTypeClickHandler,
  } = useInputAreaLogic({ ...props });

  useEffect(() => {
    // @ts-ignore
    // import("draft-js/dist/Draft.css");

    setReady(true);
  }, []);

  return (
    <div
      className={clsx(
        styles.editorContainer,
        error && styles.editorContainerError,
        isDisabled && styles.editorContainerDisabled
      )}
    >
      {isClearable && getCurrentPlainText(editorState) && (
        <IconButton
          onClick={clearEditor}
          className={styles.buttonClearable}
          icon={<CloseIcon size={EIconSize.XSmall} />}
        />
      )}
      <span className={styles.label}>
        {label}
        {!!isRequired && <span className={styles.requiredSign}>*</span>}
      </span>
      <EditorActionWrapper
        selectedActionTypeList={selectedActionTypeList}
        onInlineStyleClick={onInlineStyleClickHandler}
        onBlockTypeClick={onBlockTypeClickHandler}
        isDisabled={isDisabled}
      />
      {isReady && (
        <Editor
          ref={editorRef}
          placeholder={placeholder}
          editorState={editorState}
          onEditorStateChange={setEditorState}
          editorClassName={clsx(styles.editorWrapper, isFocused && styles.editorWrapperFocused)}
          toolbarHidden
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          readOnly={isDisabled}
        />
      )}
      <small className={styles.description}>{error ?? description}</small>
    </div>
  );
};

export default InputArea;
