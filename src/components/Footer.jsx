import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item'>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
            voluptatibus adipisci, enim accusantium, sunt aspernatur, fugit
            corrupti magnam error tempore sapiente alias magni quod! Modi
            voluptas dolorum alias blanditiis!
          </span>
        </div>
        <div className='item'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
            voluptatibus adipisci, enim accusantium, sunt aspernatur, fugit
            corrupti magnam error tempore sapiente alias magni quod! Modi
            voluptas dolorum alias blanditiis!
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>STAND</span>
          <span className='copyright'>Copyright 2023</span>
        </div>
        <div className='right'>
          <img
            style={{ height: "150px" }}
            src='https://support.pixelunion.net/hc/article_attachments/1500000313002/payment_icons_in_launch_demo_footer.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
