import React from 'react'
import '../Styles/Header.css'
import { GiRadarSweep } from "react-icons/gi";

import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container className='header '>
    
    <span><h1 className='text'>Track Your Cash</h1></span>
    <GiRadarSweep  className="headerIcon"/>
    </Container>
  )
}
export default Header
