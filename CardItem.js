import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  const scrollToTop = () => { // Fixes the weird thing where the page loads in the middle
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} onClick={scrollToTop}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Taichi Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
