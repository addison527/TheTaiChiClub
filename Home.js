import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection'; //name of the JS file

function Home() {
  return (
    <div>
      <HeroSection/>
      <Cards />
    </div>
  );
}

export default Home;