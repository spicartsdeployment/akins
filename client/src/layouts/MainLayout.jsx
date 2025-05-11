import { Outlet } from "react-router-dom";
import ScrollObserver from "../components/intersectObserver/IntersectObserver";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-layout">
        <ScrollObserver>
          <Outlet />
        </ScrollObserver>
      </main>
    </>
  );
};

export default MainLayout;
