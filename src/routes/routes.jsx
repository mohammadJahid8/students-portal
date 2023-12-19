import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/signin",
        element: "THis is signin",
      },
      {
        path: "/signup",
        element: "THis is signup",
      },
    ],
  },

  {
    path: "*",
    element: "Not found",
  },
]);

export default routes;
