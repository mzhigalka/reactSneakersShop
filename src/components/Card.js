export default function Card(props) {
  return (
    <div className="cards">
      <div className="cards__favorite">
        <img src="/img/sneakers/like0.svg" alt="Button liked" />
      </div>
      <img
        className="cards__images"
        src={props.imageUrl}
        alt="Sneakers"
        width={133}
        height={112}
      />
      <p className="cards__text">{props.title}</p>
      <div className="card__bottom d-flex justify-between ">
        <div className="d-flex flex-column">
          <span className="card__title-price text-uppercase">Цена:</span>
          <b>{props.price} руб.</b>
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
