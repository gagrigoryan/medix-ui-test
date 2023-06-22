import React from "react";
import { PopupProps } from "./PopupProps";
import PopupBase from "./PopupBase";
import PopupLayout from "./PopupLayout";
import PopupHeader from "./PopupHeader";
import PopupFooterWithActions from "./PopupFooterWithActions";

const Popup: React.FC<PopupProps> = ({ title, footerContent, ...props }) => {
  return (
    <PopupLayout>
      <PopupBase
        header={<PopupHeader title={title} />}
        footer={<PopupFooterWithActions {...props}>{footerContent && footerContent}</PopupFooterWithActions>}
        {...props}
      />
    </PopupLayout>
  );
};

export default Popup;
