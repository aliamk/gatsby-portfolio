import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import various_charts from '../assets/images/various_charts.gif'
import investors_world_map from '../assets/images/investors_world_map.gif'
import realfin_capital_raised from '../assets/images/realfin_capital_raised.gif'



const RealFinXMaps = (props) => (
    <Layout>
        <Helmet>
            <title>RealFin Maps</title>
            <meta name="description" content="LMDRoast Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major">
                        <h1>RealFin Maps</h1>                   
                    </header>

                    <h3 style={{textAlign: "justify", fontWeight:"bold"}}>
                    RealFin Solutions is a startup specialising in real estate fund intelligence that is currently preparing for its beta launch in Spring 2021.  
                    I have been working with them by tailoring javascript mapping libraries to their specifications. Some of the work in progress is included below.
                    </h3>   

                    <hr />
                    <h3 style={{textAlign:"center"}}>
                        <a href="https://github.com/aliamk/InvestorsMap-DataTable" target='blank' style={{textDecoration:"underline"}}>Map Code</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/aliamk/RealFinX_Chart1" target='blank' style={{textDecoration:"underline"}}>Bar-Chart Code</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/aliamk/RealFinx_Chart_TimeLine" target='blank' style={{textDecoration:"underline"}}>Pie and Line Chart Code</a>                        
                    </h3>
                    <hr />

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Interactive world map linked to dummy data showing the number and type of investment funds per country</p>
                    <span className="image main"><img src={investors_world_map} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>A chart comparing capital raised + number of funds per year</p>
                    <span className="image main"><img src={realfin_capital_raised} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Various charts for use on investment profile pages</p>
                    <span className="image main"><img src={various_charts} alt="" /></span>
                    
                    {/* <ul>
                        <h4>Post-MVP plans:</h4>
                        <li>Responsive design - want to make the layout work well on all screen sizes and browsers - currently it looks best in Chrome and sizes +900px</li>
                        <li>Modular Programming - look at ways to refactor the code to make it more readable, shorter and reusable</li>
                    </ul> */}
                    
                </div>

            </section>
        </div>
    </Layout>
)

export default RealFinXMaps