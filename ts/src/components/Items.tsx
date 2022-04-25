import { Item } from "./Item";
import "./Items.css";
import { ItemType } from "./Types";

interface ItemsProps {
  title: string;
  items: ItemType[];
  emptyMessage: string;
}

export const Items = ({ title, items, emptyMessage }: ItemsProps) => (
  <section className="Items">
    <h2 className="Items__title">
      {title} ({items.length})
    </h2>

    {!items?.length ? (
      <p className="Items__empty">{emptyMessage}</p>
    ) : (
      <ul className="Items__list">
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    )}
  </section>
);
