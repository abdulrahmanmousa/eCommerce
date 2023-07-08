/* eslint-disable react/prop-types */
import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  return (
    <Link className='card' to={`/product/${item.id}`}>
      <img src={item.image} alt='' className='mainImg' />
      <p>{item.title}</p>
      <div className='price'>
        <span>{item.price}$</span>
        <span>{item.price - 10}$</span>
      </div>
    </Link>
  );
}
