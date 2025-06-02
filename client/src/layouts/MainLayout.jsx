import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ScrollObserver from "../components/common-components/intersectObserver/IntersectObserver";

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
