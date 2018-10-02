import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
     <div className="HeroGroup">
       <h1>HELLOWORD</h1>
       <p>这是我的第一个网站你喜欢吗？
       </p>
       <Link to="/page-2/">向我表白</Link>
     </div>
    </div>
  </Layout>
)

export default IndexPage
