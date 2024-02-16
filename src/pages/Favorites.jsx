import React from "react";
import Card from "../components/Card";
import { Link, useNavigate } from "react-router-dom";
import AppContex from "../context";
import Info from "../components/Info";

export default function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContex);

  const navigate = useNavigate();
  const handleOnClickButton = () => {
    navigate("/");
  };

  return (
    <div className="content p-40 d-flex">
      {favorites.length > 0 ? (
        <>
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
            <h1 className="content__title ">Мои закладки</h1>
          </div>
          <div className="main-cards d-flex justify-between flex-wrap">
            {favorites.map((item, index) => (
              <Card
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                added
                {...item}
              />
            ))}
          </div>
        </>
      ) : (
        <Info
          image={"/img/notFavorites.png"}
          title={"Закладок нет :("}
          description={"Вы ничего не добавляли в закладки"}
          width={70}
          height={70}
          onClickButton={handleOnClickButton}
        />
      )}
    </div>
  );
}
