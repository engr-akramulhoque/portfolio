import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  About,
  Contact,
  Education,
  Experience,
  Feedbacks,
  Tech,
  Works,
} from "../components";
import Layout from "../components/Layout";
import MyWork from "../pages/MyWork";

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
        element: <Tech />,
      },
      {
        path: "/works",
        element: <MyWork />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
