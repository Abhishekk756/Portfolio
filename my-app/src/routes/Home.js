import React from 'react'
import HeroImg from "../components/HeroImg";
import Work from '../components/Work';
import About from "./About";
const Home = () => {
  return (
    <div className='container'>
      <HeroImg />
    <Work />
    <About />
    </div>
    
  )
}

export default Home;