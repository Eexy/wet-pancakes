import { Nav } from "./nav/nav.tsx";

export function Sidebar() {
  return <div className={"hidden md:block md:col-span-2 border-r border-r-neutral-300 p-3"}>
    <Nav />
  </div>;
}
