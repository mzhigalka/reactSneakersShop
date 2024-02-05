import React from 'react';
import Card from "../components/Card";
import { Link } from 'react-router-dom';
import AppContex from '../context';

export default function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContex);

  return (
    <div className="content p-40">
      <div className="content__favorites d-flex align-center mb-40">
        <Link to='/'>
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
        {favorites
          .map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              added
              {...item}
            />
          ))}
      </div>
    </div>
  );
}
