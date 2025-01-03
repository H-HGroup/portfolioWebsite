import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import Project from './components/Project';


const App = () => {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Project />
      </div>

    </>
  );
};

export default App;
