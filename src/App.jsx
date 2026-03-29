import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import RouteLoader from "./components/RouteLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetailsPage = lazy(() => import("./pages/ProjectDetailsPage"));

function App() {
  const location = useLocation();
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    window.history.scrollRestoration = "manual";

    const timer = window.setTimeout(() => {
      setBooting(false);
      window.scrollTo(0, 0);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {booting && <Loader key="app-loader" />}
      </AnimatePresence>

      {!booting && (
        <>
          <Cursor />
          <RouteLoader />
          <Navbar />
          <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:id" element={<ProjectDetailsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
