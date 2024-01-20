import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />

      <main className='main'>
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className='content__title '>Все кроссовки</h1>
            <div className="search__block d-flex">
              <img src="/img/search-icon.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="main-cards d-flex justify-between flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <div className="cards">
              <img 
                className="cards__images" 
                src="img/sneakers/2.jpg" 
                alt="Sneakers"
                width={133}
                height={112} 
              />
              <p className="cards__text">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__bottom d-flex justify-between ">
                <div className="d-flex flex-column">
                  <span className="card__title-price text-uppercase">
                    Цена:
                  </span>
                  <b>
                    12 999 руб.
                  </b>
                </div>
                <button>
                  <img 
                    src="/img/plus.svg" 
                    alt="" 
                    className="button__plus"
                    width={32}
                    height={32} 
                  />
                </button>
              </div>
            </div>
            <div className="cards">
              <img 
                className="cards__images" 
                src="img/sneakers/3.jpg" 
                alt="Sneakers"
                width={133}
                height={112} 
              />
              <p className="cards__text">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__bottom d-flex justify-between ">
                <div className="d-flex flex-column">
                  <span className="card__title-price text-uppercase">
                    Цена:
                  </span>
                  <b>
                    12 999 руб.
                  </b>
                </div>
                <button>
                  <img 
                    src="/img/plus.svg" 
                    alt="" 
                    className="button__plus"
                    width={32}
                    height={32} 
                  />
                </button>
              </div>
            </div>
            <div className="cards">
              <img 
                className="cards__images" 
                src="img/sneakers/4.jpg" 
                alt="Sneakers"
                width={133}
                height={112} 
              />
              <p className="cards__text">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <div className="card__bottom d-flex justify-between ">
                <div className="d-flex flex-column">
                  <span className="card__title-price text-uppercase">
                    Цена:
                  </span>
                  <b>
                    12 999 руб.
                  </b>
                </div>
                <button>
                  <img 
                    src="/img/plus.svg" 
                    alt="" 
                    className="button__plus"
                    width={32}
                    height={32} 
                  />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
