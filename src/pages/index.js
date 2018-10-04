import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
     <div className="HeroGroup">
       <h1>HELLOWORD</h1>
       <p>很高兴能够与你分享我的设计、见解和看法。<br />但行好事，勿问前程。
       </p>
       <Link to="/page-2/"><button data-ripple>MY DESIGN</button></Link>
     </div>
    </div>
  </Layout>
)

export default IndexPage
