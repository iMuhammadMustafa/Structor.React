import { memo } from "react";

export interface IValidFeedback {
  id: string;
  text?: string;
  children?: React.ReactNode;
  cssClasses?: string;
}

const ValidFeedback: React.FC<IValidFeedback> = ({
  id,
  text = "Looks good!",
  cssClasses = "valid-feedback",
  children,
}) => {
  return (
    <div id={id + "-validFeeback"} className={cssClasses}>
      {text}
      {children}
    </div>
  );
};

export default memo(ValidFeedback);
