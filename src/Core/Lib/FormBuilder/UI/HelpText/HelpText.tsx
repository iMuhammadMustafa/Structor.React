import { memo } from "react";

export interface IHelpText {
  id: string;
  text?: string;
  cssClasses?: string;
  children?: React.ReactNode;
}

const HelpText: React.FC<IHelpText> = ({ id, text, cssClasses = "form-text", children }) => {
  return (
    <div id={id + "-helpText"} className={cssClasses}>
      {text}
      {children}
    </div>
  );
};

export default memo(HelpText);
