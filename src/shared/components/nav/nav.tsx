import { NavItem } from "./nav-item.tsx";

export function Nav() {
  return <ul className={"flex flex-col gap-2"}>
    <NavItem to={"/"} name={"home"} />
    <NavItem to={"/watchlist"} name={"watchlist"} />
  </ul>;
}
