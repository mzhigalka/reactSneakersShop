import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([{}]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  // Received data from backend
  React.useEffect(() => {
    axios.get('https://65b0c894d16d31d11bdd3bd9.mockapi.io/items')
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.warn(err);
        alert('Error while receiving data');
      });

    axios.get('https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart')
      .then((res) => setCartItems(res.data));

    axios.get('https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites')
      .then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    axios.delete(`https://65b0c894d16d31d11bdd3bd9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {

    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
        //Wrong Link
        const { data } = await axios.post('https://65b0c894d16d31d11bdd3bd9.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
    };
  }; 

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} onRemove={onRemoveToCart} items={cartItems}/>}
      <Header 
        onClickCart={() => setCartOpened(true)} 
      />

        <Routes>
          <Route path="/" exact={true} element={
            <Home 
            items={items} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onChangeSearchInput={onChangeSearchInput} 
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
          />
          }>
          </Route>
        </Routes>
        <Routes>
          <Route path="/favorites" exact={true} element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
