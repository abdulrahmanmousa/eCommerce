import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";

export default function Cart() {
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      <div className='item'>
        <img
          src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/503e9eea-02dd-4f8f-91e3-6ad74a9225cc/quest-5-mens-road-running-shoes-1tmPXN.png'
          alt=''
        />
        <div className='details'>
          <h1>product title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptate ut vero, rerum saepe ipsam laboriosam ea illo? Accusantium
            mollitia voluptatibus alias ratione, doloribus sequi officiis quasi
            eos hic dolorem.
          </p>
          <div className='price'>1 x 15$</div>
          <DeleteOutlineIcon className='delete' />
        </div>
      </div>
      <div className='total'>
        <span>SUBtotal</span>
        <span>120$</span>
      </div>
      <button>checkout</button>
      <span className='reset'>Reset Cart</span>
    </div>
  );
}
