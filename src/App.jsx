import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div className="bg-slate-200 h-screen">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
