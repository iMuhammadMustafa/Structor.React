import { memo } from "react";

export interface IInvalidFeedback {
  id: string;
  errors?: Array<any>;
  cssClasses?: string;
  children?: React.ReactNode;
}

const InvalidFeedback: React.FC<IInvalidFeedback> = ({ id, errors, cssClasses = "invalid-feedback", children }) => {
  return (
    <>
      {errors &&
        errors.map((error, index) => (
          <div key={error.message + index} id={id + "-invalidFeedback" + index} className={cssClasses}>
            {error.text}
            {children}
          </div>
        ))}
    </>
  );
};

export default memo(InvalidFeedback);
