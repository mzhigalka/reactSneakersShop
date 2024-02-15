import React from "react";
import Info from "./Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onClose, items = [], onRemove }) {
  const { cartItems, setCartItems, totalPrice, totalPriceWithProcent } =
    useCart();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const { setCartOpened } = React.useContext(AppContext);

  const onClickOrder = async () => {
    //fake axios request
    try {
      const { data } = await axios.post(
        "https://65b0c894d16d31d11bdd3bd9.mockapi.io/orders",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
  };

  React.useEffect(() => {
    const handleBodyScroll = () => {
      if (isDrawerOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isDrawerOpen]);

  return (
    <div className={`overlay ${isDrawerOpen ? "overlay-open" : ""}`}>
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
          <div className="d-flex flex-column flex">
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="mb-25">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{totalPriceWithProcent} руб.</b>
                </li>
                <button onClick={onClickOrder} className="button__green">
                  Оформить заказ
                  <img src="/img/sneakers/arrow.svg" alt="Arrow" />
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <Info
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            width={120}
            height={120}
            onClickButton={() => setCartOpened(false)}
          />
        )}
      </div>
    </div>
  );
}
