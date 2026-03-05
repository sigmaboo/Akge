import { createBrowserRouter } from "react-router";
import { Home } from "./Home";
import { GamePlayer } from "./components/GamePlayer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/play/:id",
    Component: GamePlayer,
  },
]);
