import React, { useContext } from "react";
import { AudiContext } from "./context/AudiContext";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";

function App() {
  // const { theme } = useContext(AudiContext);

  return (
    <div className="outfit relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
