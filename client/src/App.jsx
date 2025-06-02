import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/footer/Footer";
import DroneDesignManufacture from "./pages/droneDesignManufacture/DroneDesignManufacture";
import RpcCourseCategory from "./components/whatWeOffer/rpcCourseCategory/RpcCourseCategory";
import AboutUs from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import CenterOfExcellence from "./pages/coe/CenterOfExcl";
import AiPlatform from "./pages/aiPlatform/AiPlatform";
import NotFound from "./pages/notFound/NotFound";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  return (
    <div className="app-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
          <div className="routes-container">
        <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/drone-design-and-manufacturing" element={<DroneDesignManufacture />} />
              <Route path="/ai-platform" element={<AiPlatform />} />
              <Route path="/center-of-excellence" element={<CenterOfExcellence />} />
              <Route path="/rpc-course-category" element={<RpcCourseCategory />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
          </div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
