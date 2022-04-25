import { Button } from "../ui/Button";
import { CheckboxOption } from "../ui/CheckboxOption";
import "./Item.css";

export const Item = ({ item }) => {
  const handleChange = (e) => {};

  return (
    <div className="Item">
      <CheckboxOption
        id={`todo-${item.id}`}
        isChecked={item.isComplete}
        label={item.title}
      />
      <Button title="Archive this todo">🗑</Button>
    </div>
  );
};
