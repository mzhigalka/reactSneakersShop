import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart"

export default function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="header__logo d-flex align-center	">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div className="header__info">
            <h3 className="header__title text-uppercase">REACT SNEAKERS</h3>
            <p className="header__text">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className="header__main">
        <ul className="header__list d-flex ">
          <li className="header__list-item cu-p" onClick={props.onClickCart}>
            <img
              className="header__list-item--img"
              width={20}
              height={20}
              src="img/basket.svg"
              alt="basket"
            />
            <span>{totalPrice} руб.</span>
          </li>
          <li className="header__list-item cu-p">
            <Link to="/favorites" className="d-flex">
              <img
                className="header__list-item--img"
                width={20}
                height={20}
                src="img/liked.svg"
                alt="liked"
              />
              <span>Закладки</span>
            </Link>
          </li>
          <li className="header__list-item cu-p">
            <Link to="/orders" className="d-flex">
              <img
                className="header__list-item--img"
                width={20}
                height={20}
                src="img/user.svg"
                alt="user"
              />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}