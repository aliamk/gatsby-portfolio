import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import various_charts from '../assets/images/various_charts.gif'
import investors_world_map from '../assets/images/investors_world_map.gif'
import investors_barchart from '../assets/images/investors_barchart.gif'


const RealFinXMaps = (props) => (
    <Layout>
        <Helmet>
            <title>RealFinX Maps</title>
            <meta name="description" content="LMDRoast Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major">
                        <h1>RealFinX Maps</h1>                   
                    </header>

                    <h3 style={{textAlign: "justify", fontWeight:"bold"}}>A <a href="https://aliamk.github.io/Fit-To-Print/" target='blank' style={{textDecoration:"underline"}}>
                    news app</a> built without any libraries or frameworks to see how much functionality 
                    can be built in vanilla Javascript, HTML and CSS - Using APIs from The Guardian and the New York Times newspapers
                    </h3>                          
                    
                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Overview of app</p>
                    <span className="image main"><img src={investors_world_map} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Can tweet any of the articles from your personal Twitter account</p>
                    <span className="image main"><img src={investors_barchart} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>The NYT API has a 'per-facet' property which lists names of people mentioned in its articles - clicking on them searches both the NYT and the Guardian for that name</p>
                    <span className="image main"><img src={various_charts} alt="" /></span>
                    
                    <ul>
                        <h4>Post-MVP plans:</h4>
                        <li>Responsive design - want to make the layout work well on all screen sizes and browsers - currently it looks best in Chrome and sizes +900px</li>
                        <li>Modular Programming - look at ways to refactor the code to make it more readable, shorter and reusable</li>
                    </ul>
                    
                </div>

            </section>
        </div>
    </Layout>
)

export default RealFinXMaps