import { Nav } from "../components/nav/nav.tsx";

export function Sidebar() {
  return <div className={"hidden md:block md:col-span-2"}>
    <Nav />
  </div>;
}
