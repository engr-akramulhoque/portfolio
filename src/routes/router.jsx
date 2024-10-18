import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { About, Contact, Education, Experience, Works } from "../components";
import Layout from "../components/Layout";
import TechAndTestimonial from "../pages/TechAndTestimonial";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/technologies",
        element: <TechAndTestimonial />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
