import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import BackgroundImages from '../assets/home.jpg';
import Movielogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import styled from 'styled-components';

export default function Netflix() {
  
  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll =()=>{
      setIsScrolled(window.pageYoffset === 0 ? false : true );
      return () => (window.onscroll = null);
  }

  return (
    <Container>
      <Navbar isScrolled = {isScrolled}/>
      <div className="hero">
        <img src={BackgroundImages} alt="background" className='background-image'/>
        <div className="conatainer">
          <div className="logo">
            <img src={Movielogo} alt="Movie Logo" />
          </div>
          <div className="buttons flex">
            <button className='flex a-center j-center'><FaPlay/> Play</button>
            <button className='flex a-center j-center'><AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div``;