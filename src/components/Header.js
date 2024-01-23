
export default function Header(props) {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="header__logo d-flex align-center	">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div className="header__info">
          <h3 className="header__title text-uppercase">REACT SNEAKERS</h3>
          <p className="header__text">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header__main">
        <ul className="header__list d-flex ">
          <li className="header__list-item cu-p" onClick={props.onClickCart}>
            <img
              className="header__list-item--img"
              width={18}
              height={18}
              src="img/basket.svg"
              alt="basket"
            />
            <span>1205 руб.</span>
          </li>
          <li className="header__list-item">
            <img
              className="header__list-item--img"
              width={18}
              height={18}
              src="img/liked.svg"
              alt="liked"
            />
            <span>Закладки</span>
          </li>
          <li className="header__list-item">
            <img
              className="header__list-item--img"
              width={18}
              height={18}
              src="img/user.svg"
              alt="user"
            />
            <span>Профиль</span>
          </li>
        </ul>
      </div>
    </header>
  );
}