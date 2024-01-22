import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default routes;
