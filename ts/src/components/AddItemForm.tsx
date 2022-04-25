import { FloatingLabelInput } from "../ui/FloatingLabelInput";
import { ButtonPrimary } from "../ui/Button";
import "./AddItemForm.css";

interface AddItemFormProps {}

let id = 0;
const createItemId = () => `item-${++id}`;

export const AddItemForm = () => {
  return (
    <div className="AddItemForm">
      <FloatingLabelInput label="What needs to be done?" name="itemTitle" />
      <ButtonPrimary>Add</ButtonPrimary>
    </div>
  );
};
