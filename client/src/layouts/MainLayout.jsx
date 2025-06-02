import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ScrollObserver from "../components/common-components/intersectObserver/IntersectObserver";
import BookDemo from "../components/bookDemo/BookDemo";

const MainLayout = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openBookDemo = () => setIsDemoOpen(true);
  const closeBookDemo = () => setIsDemoOpen(false);

  return (
    <>
      <header>
        <Navbar onBookDemoClick={openBookDemo} />
      </header>
      <main className="main-layout">
        <ScrollObserver>
          <Outlet />
        </ScrollObserver>
      </main>

      <BookDemo isOpen={isDemoOpen} onClose={closeBookDemo} />
    </>
  );
};

export default MainLayout;
