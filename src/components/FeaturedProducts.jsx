/* eslint-disable react/jsx-key */
import "./FeaturedProducts.scss";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>Featured Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          accusantium fugit illo ut aperiam facilis sit expedita officia dolor
        </p>
      </div>
      <div className='bottom'>
        {products.map((product) => (
          <Card item={product} />
        ))}
      </div>
    </div>
  );
}
