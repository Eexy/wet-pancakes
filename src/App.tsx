import { Outlet } from "react-router-dom";
import { Nav } from "./shared/components/nav/nav.tsx";

function App() {
  return <div className={"min-h-screen"}>
    <Nav />
    <Outlet></Outlet>
  </div>;
}

export default App;
