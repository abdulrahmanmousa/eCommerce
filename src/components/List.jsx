/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./List.scss";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function List({ cat }) {
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((json) => setCatProducts(json));
  });

  return (
    <div className='list'>
      {catProducts.map((catProduct) => (
        <Card item={catProduct} />
      ))}
    </div>
  );
}
