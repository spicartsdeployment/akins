import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GalleryGrid from "./pages/eventsAndGallery/EventsAndGallery";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Services from "./pages/services/services";
import CareersPage from "./pages/careers/Careers";
import JobsListPage from "./pages/jobsListPage/JobsListPage";
import JobDescriptionPage from "./pages/jobsListPage/JobDescriptionPage";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/Home"));
const Products = lazy(() => import("./pages/products/Products"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const AboutUs = lazy(() => import("./pages/about/About"));
const CenterOfExcellence = lazy(() => import("./pages/coe/CenterOfExcl"));
const DroneDesignManufacture = lazy(() => import("./pages/droneDesignManufacture/DroneDesignManufacture"));
const RpcCourseCategory = lazy(() => import("./components/whatWeOffer/rpcCourseCategory/RpcCourseCategory"));
const AiPlatform = lazy(() => import("./pages/aiPlatform/AiPlatform"));
const Blogs = lazy(() => import("./pages/blogs/Blogs"));
const Footer = lazy(() => import("./components/footer/Footer"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <div className="app-wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="routes-container">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/drone-design-and-manufacturing" element={<DroneDesignManufacture />} />
              <Route path="/ai-platform" element={<AiPlatform />} />
              <Route path="/center-of-excellence" element={<CenterOfExcellence />} />
              <Route path="/rpc-course-category" element={<RpcCourseCategory />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/events-and-gallery" element={<GalleryGrid />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/jobs" element={<JobsListPage />} />
              {/* <Route path="/jobs/job-description" element={<JobDescriptionPage />} /> */}
              <Route path="/jobs/:jobId" element={<JobDescriptionPage />} />
              <Route path="/terms-and-policies" element={<PrivacyPolicy />} />
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
