import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Scene from "./three/Scene";
import Cursor from "./components/Cursor";
import Tech from "./components/Tech";
import HomeTitle from "./components/HomeTitle";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    setTimeout(() => {
      setLoading(false); // start fade out

      setTimeout(() => {
        setShowLoader(false); // remove loader completely
        window.scrollTo(0, 0);
      }, 500); // match animation duration

    }, 2000);
  }, []);

  return (
    <>
      {/* Loader */}
      {showLoader && (
        <div className={`${loading ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
          <Loader />
        </div>
      )}

      {/* MAIN CONTENT */}
      {!loading && (
        <>

          <Cursor />
        <>

        <Navbar />
        <section id="home" className="h-screen flex items-center justify-center">
          <HomeTitle />
        </section>

        {/* 🔥 NAVBAR PAGE ONLY */}
        <section
          id="home"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "black",
            color: "white"
          }}
        >
          
        </section>

        {/* 🔥 HERO (ONLY AFTER SCROLL) */}
        <section
          id="hero"
          style={{
            height: "100vh",
            background: "black"
          }}
        >
          <Hero />
          <Footer />
        </section>

      </>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="features"><Features /></section>
          <section id="tech"><Tech /></section>
          <section id="contact"><Contact /></section>
        </>
        
      )}
    </>

  );
}

export default App;