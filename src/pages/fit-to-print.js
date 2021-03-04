import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import loader_top_stories from '../assets/images/loader_top_stories.gif'
import loader_tweet from '../assets/images/loader_tweet.gif'
import loader_per_facet_dearch from '../assets/images/loader_per_facet_dearch.gif'
import loader_search from '../assets/images/loader_search.gif'
import loader_most_popular from '../assets/images/loader_most_popular.gif'


const FitToPrint = (props) => (
    <Layout>
        <Helmet>
            <title>Alia Malek Portfolio</title>
            <meta name="description" content="LMDRoast Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major">
                        <h1>Fit To Print</h1>                   
                    </header>

                    <h3 style={{textAlign: "justify", fontWeight:"bold"}}>
                        A news app built without any libraries or frameworks to see how much functionality can be built in vanilla Javascript, HTML and CSS - Using APIs from The Guardian and the New York Times newspapers
                        <br />
                        <a href="https://aliamk.github.io/Fit-To-Print/" target='_blank' rel="noreferrer" style={{textAlign:"center", textDecoration:"underline"}}>Deployed Site</a>&nbsp;&nbsp;
                        &nbsp;&nbsp;<a href="https://github.com/aliamk/Fit-To-Print" target='_blank' rel="noreferrer" style={{textDecoration:"underline"}}>Github Code</a>                
                    </h3>                              
                    
                    <hr />

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Overview of app</p>
                    <span className="image main"><img src={loader_top_stories} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Can tweet any of the articles from your personal Twitter account</p>
                    <span className="image main"><img src={loader_tweet} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>The NYT API has a 'per-facet' property which lists names of people mentioned in its articles - clicking on them searches both the NYT and the Guardian for that name</p>
                    <span className="image main"><img src={loader_per_facet_dearch} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Users can search both APIs with the same keyword or name at the same time</p>
                    <span className="image main"><img src={loader_search} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>The gallery shows the newspapers' 20 most popular articles - clicking on one will open the article in a new tab</p>
                    <span className="image main"><img src={loader_most_popular} alt="" /></span>

                    <hr />

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

export default FitToPrint