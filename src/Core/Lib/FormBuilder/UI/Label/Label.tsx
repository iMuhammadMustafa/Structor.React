import { memo } from "react";

export interface ILabel {
  id: string;
  text?: string;
  isRequired?: boolean;
  cssClasses?: string;
  cssRequiredClasses?: string;
  children?: React.ReactNode;
}

const Label: React.FC<ILabel> = ({
  id,
  text,
  isRequired = false,
  cssClasses = "form-label",
  cssRequiredClasses = "text-danger",
  children,
}) => {
  return (
    <label id={id + "-label"} htmlFor={id} className={cssClasses}>
      {text}
      {isRequired && <span className={cssRequiredClasses}>*</span>}
      {children}
    </label>
  );
};

export default memo(Label);
