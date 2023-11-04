import { Outlet } from "react-router-dom";
import { Sidebar } from "./shared/layout/sidebar.tsx";

function App() {
  return <div className={"min-h-screen flex flex-col md:grid md:grid-cols-12 md:gap-3"}>
    <Sidebar />
    <Outlet />
  </div>;
}

export default App;
