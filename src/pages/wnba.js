import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import wnba from '../assets/images/wnba.gif'

const WNBA = (props) => (
    <Layout>
        <Helmet>
            <title>Alia Malek Portfolio</title>
            <meta name="description" content="WNBA" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major">
                        <h1>WNBA Social Media</h1>                   
                    </header>

                    <h3 style={{textAlign: "justify", fontWeight:"bold"}}>
                        Work in progress:  A site for WNBA fans and marketing professionals that brings together each current WNBA player's social media activity.  Project is on hold due to Facebook not validating individual application for new apps.              
                    </h3>   
                    <hr />

                    <span className="image main"><img src={wnba} alt="" /></span>   
                    
                    <h3 style={{textAlign:"center"}}>
                        <a href="https://github.com/aliamk/wnba" target='blank' style={{textDecoration:"underline"}}>Project Code</a>&nbsp;&nbsp;&nbsp;&nbsp;                                         
                    </h3>
                    <hr />

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Currently have functionality for display every player's name and displaying each of their 12 most recent Instagram posts.  Plan is to add Twitter, Snapchat and TikTop feeds too.  Still deciding how to style the page.</p>
                                    
                    
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

export default WNBA