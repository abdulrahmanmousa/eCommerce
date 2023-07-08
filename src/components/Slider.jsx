import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";
import "./Slider.scss";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png",
    "https://cdn-bhhdg.nitrocdn.com/khrlIvyTsTUVErjTycfRBczdrGGemjHA/assets/images/optimized/rev-7d8fd3b/wp-content/uploads/2020/05/12100657/cover_ecommerce1-800x420.webp",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == 1 ? 0 : (next) => next + 1);
  };

  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}
