import { NavItem } from "./nav-item.tsx";
import { HeartIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";

export function Nav() {
  return <ul className={"flex flex-col gap-3 items-stretch"}>
    <NavItem to={"/"} name={"home"} icon={<RectangleGroupIcon />} />
    <NavItem to={"/watchlist"} name={"watchlist"} icon={<HeartIcon />} />
  </ul>;
}
