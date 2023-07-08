import Slider from "../components/Slider";
import "./Home.scss";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts />
      <Categories />
    </>
  );
}
