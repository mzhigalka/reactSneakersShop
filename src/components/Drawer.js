export default function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="button__remove cu-p"
            src="/img/sneakers/btn-remove.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
          <div className="cart__item d-flex align-center mb-20">
            <img
              className="cart__item-images mr-20"
              width={70}
              height={70}
              src={obj.imageUrl}
              alt="Sneakers"
            />
            <div className="mr-20">
              <p>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img
              className="button__remove"
              src="/img/sneakers/btn-remove.svg"
              alt="Remove"
            />
          </div>
          ))}  
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
