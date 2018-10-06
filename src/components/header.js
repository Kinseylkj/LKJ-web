import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
     <Link to="/"><img src={require('../images/logo.svg')}  alt="logo" height="34" /></Link>
     <Link to="/home">首页</Link>
     <Link to="/design">我的设计</Link>
     <Link to="/about me">关于我</Link>
    </div> 
  </div>
)

export default Header
