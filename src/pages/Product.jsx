import { useEffect, useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      }),
      [];
  });

  const images = [
    product.image,
    "https://s.yimg.com/zp/MerchandiseImages/258B803E59-SP-11754358.jpg",
  ];

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img
            src={images[0]}
            alt=''
            onClick={() => {
              setSelectedImg(0);
            }}
          />
          <img
            src={images[1]}
            alt=''
            onClick={() => {
              setSelectedImg(1);
            }}
          />
        </div>
        <div className='mainImg'>
          <img src={images[selectedImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>{product.title}</h1>
        <span className='price'>{product.price}$</span>
        <p>{product.description}</p>
        <div className='quantity'>
          <button
            onClick={() => {
              setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
            }}
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className='links'>
          <div className='item'>
            <FavoriteBorderIcon />
            ADD TO WISHLIST
          </div>
          <div className='item'>
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className='info'>
          <span>Vendor:polo</span>
          <span>Product Type:T-shirt</span>
          <span>Tag:T-shirt,Women,Top</span>
        </div>
        <hr />
        <div className='info'>
          <span>DESCRIPTION</span>
          <span>additional information</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}
