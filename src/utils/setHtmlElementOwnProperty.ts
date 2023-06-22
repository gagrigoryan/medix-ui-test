export const setInputElementOwnProperty = (
  target: HTMLInputElement,
  propertyName: string,
  value?: string | number | null
) => {
  const desc = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, propertyName);
  desc?.set?.call?.(target, value);
};

// TODO: change implementation
export const setTextareaElementOwnProperty = (
  target: HTMLInputElement,
  propertyName: string,
  value?: string | number | null
) => {
  const desc = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, propertyName);
  desc?.set?.call?.(target, value);
};
