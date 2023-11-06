import { Outlet } from "react-router-dom";
import { Sidebar } from "./shared/layout/sidebar/sidebar.tsx";

function App() {
  return <div className={"min-h-screen flex flex-col md:grid md:grid-cols-12 md:gap-3"}>
    <Sidebar />
    <div className={"col-span-10"}>
      <Outlet />
    </div>
  </div>;
}

export default App;
