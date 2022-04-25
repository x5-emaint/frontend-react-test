import classNames from "classnames";
import "./Button.css";

export const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={classNames("Button", "Button--reset", className)}
  >
    {children}
  </button>
);

export const ButtonPrimary = ({ children, className, ...props }) => (
  <Button {...props} className={classNames("Button--primary", className)}>
    {children}
  </Button>
);
