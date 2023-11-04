import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Home } from "./routes/home/home.tsx";
import { Watchlist } from "./routes/watchlist/watchlist.tsx";

export const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Home />,
  }, {
    path: "watchlist",
    element: <Watchlist />,
  }],
}]);
