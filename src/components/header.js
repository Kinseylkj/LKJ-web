import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
     <Link to="/"><img src={require('../images/logo.svg')}  alt="logo" height="30" /></Link>
     <Link to="/home">Home</Link>
     <Link to="/design">Design</Link>
     <Link to="/about me">About Me</Link>
    </div> 
  </div>
)

export default Header
