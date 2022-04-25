import { Checklist } from "./Checklist";
import { ChecklistType } from "./Types";

const checklist: ChecklistType = {
  title: "Title",
  itemsTodo: [{ id: "1", isComplete: false, title: "Task x" }],
  doneItems: [{ id: "2", isComplete: true, title: "Task y" }],
  // doneItems: [],
};

export const SyncedChecklist = () => <Checklist checklist={checklist} />;
