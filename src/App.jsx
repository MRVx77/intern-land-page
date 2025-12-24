import React, { useEffect } from "react";
import Home from "./pages/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
