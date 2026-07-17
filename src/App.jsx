import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />
         <Route
          path="/services"
          element={<Services />}
        />
  <Route
          path="/courses"
          element={<Courses />}
        />
<Route
          path="/contact"
          element={<Contacts />}
        />

      </Routes>

      <Footer />

    </div>
  );
}