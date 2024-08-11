import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
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
// import Card from 'react-bootstrap/Card';

// function CardItem() {
//   return (
//     <>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />
//       <Card>
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <Card.Img variant="bottom" src="holder.js/100px180" />
//       </Card>
//     </>
//   );
// }

// export default CardItem;
