import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Home } from "./routes/home/home.tsx";
import { homeAction } from "./routes/home/home-action.ts";

export const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Home />,
    loader: homeAction,
  }],
}]);
