import React from 'react';

export default function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className="cards">
      <div className="cards__favorite">
        <img 
          src="/img/sneakers/like0.svg" 
          alt="Button liked"
          onClick={props.onClickFavorite}
        />
      </div>
      <img
        className="cards__images"
        src={props.imageUrl}
        alt="Sneakers"
        width={133}
        height={112}
      />
      <p className="cards__text">{props.title}</p>
      <div className="card__bottom d-flex justify-between ">
        <div className="d-flex flex-column">
          <span className="card__title-price text-uppercase">Цена:</span>
          <b>{props.price} руб.</b>
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
