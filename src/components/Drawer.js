export default function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="button__remove cu-p"
            src="/img/sneakers/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cart__item d-flex align-center mb-20">
            <img
              className="cart__item-images mr-20"
              width={70}
              height={70}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="button__remove"
              src="/img/sneakers/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div className="cart__item d-flex align-center mb-20">
            <img
              className="cart__item-images mr-20"
              width={70}
              height={70}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="button__remove"
              src="/img/sneakers/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>

        <div className="cart__total-block">
          <ul>
            <li className="mb-20">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="mb-25">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
            <button className="button__green">
              Оформить заказ
              <img src="/img/sneakers/arrow.svg" alt="Arrow" />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
