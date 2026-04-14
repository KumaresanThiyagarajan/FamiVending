import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Products from './components/Products';
import ReadyToWork from './components/ReadyToWork';
import Experience from './components/Experience';
import Blog from './components/Blog';
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
          <Team />
          <Products />
          <ReadyToWork />
          <Experience />
          <Blog />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
