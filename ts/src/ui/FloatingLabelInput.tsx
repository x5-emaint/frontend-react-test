import { useState } from "react";
import classNames from "classnames";
import "./FloatingLabelInput.css";

interface FloatingLabelInputProps {
  name: string;
  label: string;
  type?: string;
}

export const FloatingLabelInput = ({
  name,
  label,
  type = "text",
}: FloatingLabelInputProps) => {
  const [value, setValue] = useState("");
  const isStickyLabel = value.length > 0;

  return (
    <label className="FloatingLabelInput">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span
        className={classNames("FloatingLabelInput__label", {
          "FloatingLabelInput__label--sticky": isStickyLabel,
        })}
      >
        {label}
      </span>
    </label>
  );
};
