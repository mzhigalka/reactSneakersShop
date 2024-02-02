import React from 'react';

export default function Drawer({ onClose, items = [], onRemove }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  React.useEffect(() => {
    const handleBodyScroll = () => {
      if (isDrawerOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isDrawerOpen]);

  return (
    <div className={`overlay ${isDrawerOpen ? 'overlay-open' : ''}`}>
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

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div 
                  key={obj.id} 
                  className="cart__item d-flex align-center mb-20"
                >
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
                    onClick={() => onRemove(obj.id)}
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
        ) : (
          <div className="cart__empty d-flex align-center justify-center flex-column flex">
            <img
              src="/img/empty-cart.jpg"
              alt="Empty"
              width={120}
              height={120}
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="button__green" onClick={onClose}>
              <img src="/img/sneakers/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
