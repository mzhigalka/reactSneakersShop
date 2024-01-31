import Card from "../components/Card";

export default function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="content__title ">Мои закладки</h1>
      </div>
      <div className="main-cards d-flex justify-between flex-wrap">
        {items
          .map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
