import React from "react";

const Info = ({ image, title, description, width, height, onClickButton }) => {
  
  return (
    <div className="cart__empty cart__orders cart d-flex align-center justify-center flex-column flex">
      <img src={image} alt="Empty" width={width} height={height} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="button__green" onClick={onClickButton}>
        <img src="/img/sneakers/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
