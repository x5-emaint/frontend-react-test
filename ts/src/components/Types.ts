export interface ItemType {
  id: string;
  title: string;
  isComplete: boolean;
}

export interface ChecklistType {
  title: string;
  itemsTodo: ItemType[];
  doneItems: ItemType[];
}
