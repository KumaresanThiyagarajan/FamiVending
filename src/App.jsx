import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="app">
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <WhyChooseUs />
          <Products />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
