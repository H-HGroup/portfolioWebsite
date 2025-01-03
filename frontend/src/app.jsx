import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import Project from './components/Project';
import Services from './components/Services';


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services />

        <Project />
      </div>

    </>
  );
};

export default App;
