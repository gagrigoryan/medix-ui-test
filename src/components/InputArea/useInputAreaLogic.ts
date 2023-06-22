import React, { useEffect, useRef, useState } from "react";
import { ContentState, EditorState, RichUtils } from "draft-js";
import { EditorBlockType, EditorInlineStyle, HTMLTextAreaProps } from "./InputAreaProps";
import { Editor } from "react-draft-wysiwyg";
import { getCurrentBlockType, getCurrentInlineStyles, getCurrentPlainText, checkIsSelectedBlockType } from "./utils";

export type SelectedActionTypeList = Array<EditorInlineStyle | EditorBlockType>;

type StateDispatch<T> = React.Dispatch<React.SetStateAction<T>>;

type InputAreaLogicHook = {
  editorRef: React.MutableRefObject<Editor | null>;
  editorState: EditorState;
  setEditorState: StateDispatch<EditorState>;
  placeholder?: string;
  setPlaceholder: StateDispatch<string | undefined>;
  isFocused: boolean;
  setFocused: StateDispatch<boolean>;
  selectedActionTypeList: SelectedActionTypeList;
  setSelectedActionTypeList: StateDispatch<SelectedActionTypeList>;
  onInlineStyleClickHandler: (inlineStyle: EditorInlineStyle) => void;
  onBlockTypeClickHandler: (inlineStyle: EditorBlockType) => void;
  onBlurHandler: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocusHandler: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChangeHandler: () => void;
  clearEditor: () => void;
};

const createEditorState = (value?: string): EditorState => {
  return value ? EditorState.createWithContent(ContentState.createFromText(value)) : EditorState.createEmpty();
};

export const useInputAreaLogic = ({
  placeholder: sourcePlaceholder,
  onFocus,
  onBlur,
  onChange,
  value,
}: HTMLTextAreaProps): InputAreaLogicHook => {
  const editorRef = useRef<Editor | null>(null);
  const [editorState, setEditorState] = useState<EditorState>(() => createEditorState(value));
  const [placeholder, setPlaceholder] = useState<string | undefined>(sourcePlaceholder);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [selectedActionTypeList, setSelectedActionTypeList] = useState<SelectedActionTypeList>([]);

  const focusEditorIfBlurred = () => {
    const editor = editorRef.current;
    if (editor && !isFocused) {
      editor.focusEditor();
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const isSelectedBlockType = checkIsSelectedBlockType(selectedActionTypeList);
    if (!getCurrentPlainText(editorState) && !isSelectedBlockType) {
      setPlaceholder(sourcePlaceholder);
    }
    setFocused(false);
    onBlur?.(event);
  };

  const clearEditor = () => {
    setEditorState(EditorState.createEmpty());
    focusEditorIfBlurred();
  };

  const onFocusHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const isSelectedBlockType = checkIsSelectedBlockType(selectedActionTypeList);
    setPlaceholder(!isSelectedBlockType ? sourcePlaceholder : "");
    setFocused(true);
    onFocus?.(event);
  };

  const onChangeHandler = () => {
    const text = getCurrentPlainText(editorState);
    onChange?.(text);
  };

  const onInlineStyleClickHandler = (inlineStyle: EditorInlineStyle) => {
    focusEditorIfBlurred();
    setTimeout(() => {
      setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, inlineStyle));
    });
  };

  const onBlockTypeClickHandler = (blockType: EditorBlockType) => {
    focusEditorIfBlurred();
    setTimeout(() => {
      setEditorState((prevState) => RichUtils.toggleBlockType(prevState, blockType));
    });
  };

  useEffect(() => {
    const currentInlineStyles = getCurrentInlineStyles(editorState);
    const currentEditorType = getCurrentBlockType(editorState);

    setPlaceholder(!isFocused ? sourcePlaceholder : "");
    setSelectedActionTypeList([...currentInlineStyles, currentEditorType]);
  }, [editorState]);

  return {
    editorRef,
    editorState,
    setEditorState,
    isFocused,
    setFocused,
    placeholder,
    setPlaceholder,
    selectedActionTypeList,
    setSelectedActionTypeList,
    onBlurHandler,
    onFocusHandler,
    onChangeHandler,
    clearEditor,
    onBlockTypeClickHandler,
    onInlineStyleClickHandler,
  };
};
