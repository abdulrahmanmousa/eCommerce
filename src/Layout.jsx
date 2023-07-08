import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./App.scss";
export default function Layout() {
  return (
    <div className='app'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
