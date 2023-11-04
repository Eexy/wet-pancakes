import { NavItem } from "./nav-item.tsx";

export function Nav() {
  return <ul>
    <NavItem to={"/"} name={"home"} />
    <NavItem to={"/watchlist"} name={"watchlist"} />
  </ul>;
}
