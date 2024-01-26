import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([{}]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  // Received data from backend
  React.useEffect(() => {
    fetch('https://65b0c894d16d31d11bdd3bd9.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error while receiving data')
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} items={cartItems}/>}
      <Header 
        onClickCart={() => setCartOpened(true)} 
      />

      <main className="main">
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className="content__title ">
              {searchValue ? `Поиск по запросу: "${searchValue}"`: "Все кроссовки"}
            </h1>
            <div className="search__block d-flex">
              <img src="/img/search-icon.svg" alt="Search" />
              {searchValue && <img
                className="button__remove clear cu-p"
                src="/img/sneakers/btn-remove.svg"
                alt="Clear text"
                onClick={() => setSearchValue('')}
              />}
              <input 
                type="text" 
                placeholder="Поиск..." 
                onChange={onChangeSearchInput}
                value={searchValue}
              />
            </div>
          </div>
          <div className="main-cards d-flex justify-between flex-wrap">
            {items
              .filter((item) => item && item.title && item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => ( 
              <Card 
                key={index}
                title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl} 
                onClickFavorite={() => console.log('Favorite')}
                onPlus={(obj) => onAddToCart(obj)}
              /> 
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
