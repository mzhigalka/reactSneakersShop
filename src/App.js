import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);

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
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header 
        onClickCart={() => setCartOpened(true)} 
      />

      <main className="main">
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className="content__title ">Все кроссовки</h1>
            <div className="search__block d-flex">
              <img src="/img/search-icon.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="main-cards d-flex justify-between flex-wrap">
            {items.map((obj) => (
              <Card 
                title={obj.title} 
                price={obj.price} 
                imageUrl={obj.imageUrl} 
                onClickFavorite={() => console.log('Favorite')}
                onClickPlus={() => console.log('Plus')}
              /> 
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
