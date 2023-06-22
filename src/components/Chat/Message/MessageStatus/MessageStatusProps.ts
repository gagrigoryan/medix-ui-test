export enum EMessageStatus {
  Sent = "sent",
  Delivered = "delivered",
  Read = "read",
  Error = "error",
}

export type MessageStatusProps = {
  time: string;
  isEdited?: boolean;
  status?: EMessageStatus;
  className?: string;
};
