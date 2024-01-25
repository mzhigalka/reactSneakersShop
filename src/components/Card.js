import React from 'react';

export default function Card({ title, price, imageUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  return (
    <div className="cards">
      <div className="cards__favorite">
        <img 
          src="/img/sneakers/like0.svg" 
          alt="Button liked"
          onClick={onFavorite}
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
        <button>
          <img
            src={
              isAdded ? "/img/done.svg" : "/img/plus.svg"
            }
            alt="Plus"
            className="button__plus"
            width={32}
            height={32}
            onClick={onClickPlus}
          />
        </button>
      </div>
    </div>
  );
}
