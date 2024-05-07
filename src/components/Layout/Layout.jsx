import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";

export const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
