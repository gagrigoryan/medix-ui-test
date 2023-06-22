import React from "react";
import { EIconSize } from "../../domain/entities/icon";
import { FontBoldIcon, FontItalicIcon, FontUnderlinedIcon, ListBulletedIcon, ListNumberedIcon } from "../Icons";

import { EditorInlineStyle, EditorBlockType } from "./InputAreaProps";

export const EditorInlineStyleIcon = {
  [EditorInlineStyle.Bold]: <FontBoldIcon size={EIconSize.Small} />,
  [EditorInlineStyle.Italic]: <FontItalicIcon size={EIconSize.Small} />,
  [EditorInlineStyle.Underline]: <FontUnderlinedIcon size={EIconSize.Small} />,
};

export const EditorBlockTypeIcon = {
  [EditorBlockType.OrderedList]: <ListNumberedIcon size={EIconSize.Small} />,
  [EditorBlockType.UnorderedList]: <ListBulletedIcon size={EIconSize.Small} />,
};
