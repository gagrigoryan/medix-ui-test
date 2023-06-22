import React, { useMemo } from "react";
import styles from "./InputArea.module.scss";
import { EditorBlockType, EditorInlineStyle } from "./InputAreaProps";
import clsx from "clsx";
import { IconButton } from "../Button";
import { EditorBlockTypeIcon, EditorInlineStyleIcon } from "./constants";

type EditorActionWrapperProps = {
  selectedActionTypeList: Array<EditorInlineStyle | EditorBlockType>;
  onInlineStyleClick: (inlineStyle: EditorInlineStyle) => void;
  onBlockTypeClick: (blockType: EditorBlockType) => void;
  isDisabled?: boolean;
};

const EditorActionWrapper: React.FC<EditorActionWrapperProps> = ({
  selectedActionTypeList,
  onInlineStyleClick,
  onBlockTypeClick,
  isDisabled,
}) => {
  const blockTypeList = useMemo(() => Object.values(EditorBlockType), []);
  const inlineStyleList = useMemo(() => Object.values(EditorInlineStyle), []);

  const onActionMouseDownHandler = (event: React.MouseEvent, actionType: EditorInlineStyle | EditorBlockType) => {
    event.preventDefault();
    if (blockTypeList.includes(actionType as EditorBlockType)) {
      onBlockTypeClick?.(actionType as EditorBlockType);
      return;
    }
    onInlineStyleClick?.(actionType as EditorInlineStyle);
  };

  return (
    <div className={styles.editorActionWrapper}>
      <button className={styles.editorActionButton} />
      {inlineStyleList.map((inlineStyle) => (
        <IconButton
          onMouseDown={(event) => onActionMouseDownHandler(event, inlineStyle)}
          className={clsx(
            styles.editorActionButton,
            selectedActionTypeList.includes(inlineStyle) && styles.editorActionButtonActive
          )}
          key={inlineStyle}
          isIconFilled
          isDisabled={isDisabled}
          icon={EditorInlineStyleIcon[inlineStyle]}
        />
      ))}
      {blockTypeList.map((blockType) => (
        <IconButton
          onMouseDown={(event) => onActionMouseDownHandler(event, blockType)}
          className={clsx(
            styles.editorActionButton,
            selectedActionTypeList.includes(blockType) && styles.editorActionButtonActive
          )}
          key={blockType}
          isIconFilled
          isDisabled={isDisabled}
          icon={EditorBlockTypeIcon[blockType]}
        />
      ))}
    </div>
  );
};

export default EditorActionWrapper;
