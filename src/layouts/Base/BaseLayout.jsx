import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
