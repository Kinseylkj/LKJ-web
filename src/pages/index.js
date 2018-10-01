import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div>
    <div className="Hero">
     <div className="HeroGroup">
       <h1>HELLOWORD</h1>
       <p>这是我的第一个网站</p>
       <Link to="/page-2/">Go to page 2</Link>
     </div>
    </div>
  </div>
)

export default IndexPage
