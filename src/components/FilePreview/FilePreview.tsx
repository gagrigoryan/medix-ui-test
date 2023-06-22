import React from "react";
import styles from "./FilePreview.module.scss";
import { PopupLayout } from "../Popup";
import { IconButton } from "../Button";
import { CloseIcon, DownloadIcon, MinusIcon, PlusIcon, RotateIcon } from "../Icons";

type FilePreviewProps = {
  onClose?: () => void;
  onDownload?: () => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onRotate?: () => void;
  className?: string;
  children?: React.ReactNode;
};

const FilePreview: React.FC<FilePreviewProps> = ({
  onClose,
  onRotate,
  onZoomOut,
  onZoomIn,
  onDownload,
  className,
  children,
}) => {
  return (
    <PopupLayout className={className}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.filename}>filename.jpeg</span>
          <div className={styles.buttonWrapper}>
            <IconButton onClick={onDownload} className={styles.button} icon={<DownloadIcon />} />
            <IconButton onClick={onClose} className={styles.button} icon={<CloseIcon />} />
          </div>
        </div>
        <div className={styles.contentWrapper}>{children}</div>
        <div className={styles.actionWrapper}>
          <IconButton onClick={onZoomOut} className={styles.actionButton} icon={<MinusIcon />} />
          <IconButton onClick={onRotate} className={styles.actionButtonFilled} isIconFilled icon={<RotateIcon />} />
          <IconButton onClick={onZoomIn} className={styles.actionButton} icon={<PlusIcon />} />
        </div>
      </div>
    </PopupLayout>
  );
};

export default FilePreview;
