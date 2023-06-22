import { EditorState } from "draft-js";
import { EditorBlockType, EditorInlineStyle } from "./InputAreaProps";
import { SelectedActionTypeList } from "./useInputAreaLogic";

export const getCurrentInlineStyles = (editorState: EditorState): EditorInlineStyle[] => {
  return editorState.getCurrentInlineStyle().toArray() as EditorInlineStyle[];
};

export const getCurrentBlockType = (editorState: EditorState): EditorBlockType => {
  const selection = editorState.getSelection();
  return editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType() as EditorBlockType;
};

export const getCurrentPlainText = (editorState: EditorState): string => {
  return editorState.getCurrentContent().getPlainText();
};

export const checkIsSelectedBlockType = (selectedActionTypeList: SelectedActionTypeList): boolean => {
  return (
    selectedActionTypeList.includes(EditorBlockType.OrderedList) ||
    selectedActionTypeList.includes(EditorBlockType.UnorderedList)
  );
};
