import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../context";

export default function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart"
        );
        setOrders(data.map((obj) => obj));
        // setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.warn(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="content__favorites d-flex align-center mb-40">
        <Link to="/">
          <div className="content__favorites-block">
            <img
              className="arrow__left d-flex"
              src="./img/arrowLeft.svg"
              alt="Arrow"
            />
          </div>
        </Link>
        <h1 className="content__title ">Мои покупки</h1>
      </div>
      <div className="main-cards d-flex flex-wrap">
        {orders.map((item, index) => (
          <Card
            key={index}
            onFavorite={(obj) => onAddToFavorite(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
