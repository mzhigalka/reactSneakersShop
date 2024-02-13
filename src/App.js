import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from "./context";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([{}]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  //try catch + Promise.all
  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get(
          "https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart"
        );
        // const favoritesResponse = await axios.get('https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites');
        const itemsResponse = await axios.get(
          "https://65b0c894d16d31d11bdd3bd9.mockapi.io/items"
        );

        setIsLoading(false);
        setCartItems(cartResponse.data);
        // setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart/${obj.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post("https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart", obj);
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  const onRemoveToCart = (id) => {
    try {
      axios.delete(`https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        //Wrong Link
        const { data } = await axios.post(
          "https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки");
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToCart,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveToCart}
            items={cartItems}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            exact={true}
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/favorites" exact={true} element={<Favorites />}></Route>
          <Route path="/orders" exact={true} element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
