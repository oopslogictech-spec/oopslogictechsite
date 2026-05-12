import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Services />
        <Courses />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;