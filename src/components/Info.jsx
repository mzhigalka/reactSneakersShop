import React from "react";
import AppContext from "../context";

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cart__empty d-flex align-center justify-center flex-column flex">
      <img src={image} alt="Empty" width={120} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="button__green" onClick={() => setCartOpened(false)}>
        <img src="/img/sneakers/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
