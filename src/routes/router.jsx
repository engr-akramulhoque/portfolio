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

export const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Layout />,
    children: [
      {
        path: "/portfolio",
        element: <App />,
      },
      {
        path: "/portfolio/about",
        element: <About />,
      },
      {
        path: "/portfolio/experience",
        element: <Experience />,
      },
      {
        path: "/portfolio/education",
        element: <Education />,
      },
      {
        path: "/portfolio/technologies",
        element: <Tech />,
      },
      {
        path: "/portfolio/works",
        element: <Works />,
      },
      {
        path: "/portfolio/feedbacks",
        element: <Feedbacks />,
      },
      {
        path: "/portfolio/contact",
        element: <Contact />,
      },
    ],
  },
]);
