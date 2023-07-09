/* eslint-disable react/jsx-key */
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";
import { useSelector } from "react-redux";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products.map((product) => (
        <div className='item'>
          <img src={product.image} alt='' />
          <div className='details'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className='price'>
              {product.quantity} x {product.price}$
            </div>
            <DeleteOutlineIcon className='delete' />
          </div>
        </div>
      ))}
      <div className='total'>
        <span>SUBtotal</span>
        <span>{totalPrice()}$</span>
      </div>
      <button>checkout</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
}
