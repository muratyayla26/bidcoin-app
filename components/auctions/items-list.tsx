import { ItemListCard } from "../common/item-list-card";

export const ItemsList = ({ results }: { results: any }) => {
  return (
    <div className="gap-3 sm:gap-6 grid grid-cols-2 sm:grid-cols-4">
      {results.map((item: any) => (
        <ItemListCard
          key={item.id}
          id={item.id}
          imgUrl={item.image}
          title={item.name}
        />
      ))}
    </div>
  );
};
