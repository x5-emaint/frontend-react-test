import { AddItemForm } from "./AddItemForm";
import { Items } from "./Items";
import "./Checklist.css";
import { ChecklistType } from "./Types";

interface ChecklistProps {
  checklist: ChecklistType;
}

export const Checklist = ({ checklist }: ChecklistProps) => (
  <section className="Checklist">
    <h1 className="Checklist__title">{checklist.title}</h1>
    <p className="Checklist__info">↳ You modified this list ??? ago</p>

    <AddItemForm />

    <Items
      title="Things to do"
      items={checklist.itemsTodo}
      emptyMessage="Nothing to do yet... :-)"
    />

    <Items
      title="Done"
      items={checklist.doneItems}
      emptyMessage="Alright let's get to work!"
    />
  </section>
);
