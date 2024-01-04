import { RouterProvider } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./components/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter()} />
    </>
  );
};

export default App;
