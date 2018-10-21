import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'

const IndexPage = () => (
  <div>
    <Layout />
    <div className="Hero">
       <div className="HeroGroup">
         <h1>诶呦，<br />设计。</h1>
         <p>很高兴能够与你分享我的设计、见解和看法。<br />但行好事，勿问前程。</p>
         <div className="HeroLink">
           <Link to="/page-2/"><button>我的设计</button></Link>
           <Link to="/about me">关于我</Link>
           </div>
       </div>
       <div className="HeroSvg">
         <svg width="974" height="846" viewBox="0 0 974 763"        fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill="#2651CF">
         <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="20s" values="M0 258.649L503.637 -211L973.287 292.637L469.649 762.287L0 258.649Z;

         M0 125L396 0L666 239L366 657L0 125Z;

         M0 190.5L306 0L686 330.5L232.5 803L0 190.5Z;

         M0 258.649L503.637 -211L973.287 292.637L469.649 762.287L0 258.649Z;" 
         />
         </path>
         </svg>
       </div>
       <Card
         title="澳门科技大学OA系统"
         text="为澳门科技大学设计的OA系统，包括公文、文档、资讯、请假、加班等多个应用，已经上线。" />
    </div>
  </div>
)

export default IndexPage
