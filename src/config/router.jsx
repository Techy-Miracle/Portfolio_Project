import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/Base/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Skills from "../components/Experience";
export default function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/experience",
          element: <Skills />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
  ]);
}
