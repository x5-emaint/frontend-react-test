import "./CheckboxOption.css";

export const CheckboxOption = ({ id, isChecked, label }) => (
  <label htmlFor={id} className="CheckboxOption">
    {/* <input name="isChecked" type="hidden" value="off" /> */}
    <input
      id={id}
      name="isChecked"
      type="checkbox"
      defaultChecked={isChecked}
      value="on"
    />
    <span>{label}</span>
  </label>
);
