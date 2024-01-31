import Card from "../components/Card";

export default function Home ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="content__title ">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search__block d-flex">
          <img src="/img/search-icon.svg" alt="Search" />
          {searchValue && (
            <img
              className="button__remove clear cu-p"
              src="/img/sneakers/btn-remove.svg"
              alt="Clear text"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            type="text"
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      </div>
      <div className="main-cards d-flex justify-between flex-wrap">
        {items
          .filter(
            (item) =>
              item &&
              item.title &&
              item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
