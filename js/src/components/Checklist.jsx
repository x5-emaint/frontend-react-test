import { AddItemForm } from "./AddItemForm";
import { Items } from "./Items";
import "./Checklist.css";

const sample = {
  title: "Title",
  itemsTodo: [{ id: "1", isComplete: false, title: "Task x" }],
  doneItems: [{ id: "2", isComplete: true, title: "Task y" }]
  // doneItems: [],
};

export const Checklist = ({ checklist }) => (
  <section className="Checklist">
    <h1 className="Checklist__title">{sample.title}</h1>
    <p className="Checklist__info">↳ You modified this list ??? ago</p>

    <AddItemForm />

    <Items
      title="Things to do"
      items={sample.itemsTodo}
      emptyMessage="Nothing to do yet... :-)"
    />

    <Items
      title="Done"
      items={sample.doneItems}
      emptyMessage="Alright let's get to work!"
    />
  </section>
);
