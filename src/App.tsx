import { Outlet } from "react-router-dom";
import { Nav } from "./shared/components/nav/nav.tsx";

function App() {
  return <div className={"min-h-screen flex flex-col md:grid md:grid-cols-8 lg:grid-cols-11 lg:gap-3"}>
    <Nav />
    <Outlet></Outlet>
  </div>;
}

export default App;
