import { ChangeEvent } from "react";
import { Button } from "../ui/Button";
import { CheckboxOption } from "../ui/CheckboxOption";
import { ItemType } from "./Types";
import "./Item.css";

interface ItemProps {
  item: ItemType;
}

export const Item = ({ item }: ItemProps) => {
  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {};

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
