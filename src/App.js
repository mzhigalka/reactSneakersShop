
function App() {
  return (
    <div className='wrapper clear'>
      <div className="overlay">
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
                <p>
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b>
                  12 999 руб.
                </b>
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
                <p>
                  Мужские Кроссовки Nike Air Max 270
                </p>
                <b>
                  12 999 руб.
                </b>
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

  
      <header className='header d-flex justify-between align-center p-40'>
        <div className='header__logo d-flex align-center	'>
          <img 
            width={40} 
            height={40} 
            src="/img/logo.png" 
            alt="logo" 
          />
          <div className='header__info'>
            <h3 className='header__title text-uppercase'>REACT SNEAKERS</h3>
            <p className='header__text'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className='header__main'>
          <ul className='header__list d-flex '>
              <li className="header__list-item">
                <img
                  className="header__list-item--img" 
                  width={18} 
                  height={18} 
                  src="img/basket.svg" 
                  alt="basket" 
                />
                <span>1205 руб.</span>
              </li>
            <li className="header__list-item">
              <img
                className="header__list-item--img" 
                width={18} 
                height={18} 
                src="img/liked.svg" 
                alt="liked" 
              />
              <span>Закладки</span>
            </li>
            <li className="header__list-item">
              <img
                className="header__list-item--img" 
                width={18} 
                height={18} 
                src="img/user.svg" 
                alt="user" 
              />
              <span>Профиль</span>
            </li>
          </ul>
        </div>
      </header>
      <main className='main'>
        <div className="content p-40">
          <div className="d-flex justify-between align-center mb-40">
            <h1 className='content__title '>Все кроссовки</h1>
            <div className="search__block d-flex">
              <img src="/img/search-icon.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>

          <div className="main-cards d-flex justify-between">
            <div className="cards">
              <div className="cards__favorite">
                <img src="/img/sneakers/like0.svg" alt="Button liked" />
              </div>
              <img 
                className="cards__images" 
                src="img/sneakers/1.jpg" 
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
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
