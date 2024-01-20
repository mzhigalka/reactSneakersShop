
export default function Card() {
  return (
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
      <p className="cards__text">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="card__bottom d-flex justify-between ">
        <div className="d-flex flex-column">
          <span className="card__title-price text-uppercase">Цена:</span>
          <b>12 999 руб.</b>
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
  );
}