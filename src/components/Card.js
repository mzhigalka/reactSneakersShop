import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

export default function Card({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, price, imageUrl };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="cards">
      {loading ? (
        <ContentLoader
          speed={2}
          width={159}
          height={250}
          viewBox="0 0 159 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="-1" rx="10" ry="10" width="150" height="112" />
          <rect x="0" y="127" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="150" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="183" rx="8" ry="8" width="80" height="25" />
          <rect x="116" y="177" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="cards__favorite">
            <img
              src={
                isFavorite
                  ? "/img/sneakers/like1.svg"
                  : "/img/sneakers/like0.svg"
              }
              alt="Button liked"
              onClick={onClickFavorite}
            />
          </div>
          <img
            className="cards__images"
            src={imageUrl}
            alt="Sneakers"
            width={133}
            height={112}
          />
          <p className="cards__text">{title}</p>
          <div className="card__bottom d-flex justify-between ">
            <div className="d-flex flex-column">
              <span className="card__title-price text-uppercase">Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <button>
                <img
                  src={isItemAdded(id) ? "/img/done.svg" : "/img/plus.svg"}
                  alt="Plus"
                  className="button__plus"
                  width={32}
                  height={32}
                  onClick={onClickPlus}
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
