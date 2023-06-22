export type NotificationProps = {
  text: string;
  actionText?: string;
  onActionClick?: () => void;
  onClose?: () => void;
  className?: string;
};
