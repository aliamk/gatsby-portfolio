import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import for_loop from '../assets/images/for_loop.png'
import map_array from '../assets/images/map_array.png'
import for_of_for_in from '../assets/images/for_of_for_in.png'
import up_arrow from '../assets/images/up_arrow.png'



const Notebook = (props) => (
    <Layout>
        <Helmet>
            <title>Notebook</title>
            <meta name="description" content="Blog Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major" id="major"><h1>Notebook</h1></header>
                    <a href="#angular_react" style={{color:"yellow", textDecoration: "none"}}>Angular & React</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#success_react" style={{color:"yellow", textDecoration: "none"}}>Success of React</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#plan_react" style={{color:"yellow", textDecoration: "none"}}>How To Plan a React App</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#refactoring" style={{color:"yellow", textDecoration: "none"}}>Refactoring Examples</a>&nbsp;&nbsp;&nbsp;&nbsp;

                    <br /><br />

                    <h3 style={{textAlign: "justify", fontWeight:"bold"}}>How Does JS Work?
                        <br /><br />
                        <ul>
                          <li>Javascript is a <span style={{color:"yellow"}}>single-threaded language</span> that can be non-blocking</li>
                          <li><span style={{color:"yellow"}}>What does a programme do?</span> Programmes allocate memory (for variables and files etc) and parse/execute scripts (read and write commands)</li>
                          <li>The <span style={{color:"yellow"}}>V8 engine</span> reads the JS code and changes it into machine-executable instructions for the browser</li>
                          <li>The engine has two parts: 1) The <span style={{color:"yellow"}}>Memory Heap</span> - allocates memory 2) The <span style={{color:"yellow"}}>Call Stack</span> - executes code, tells u where u r in the programme</li>
                          <li><span style={{color:"yellow"}}>What's a memory leak?</span> When variables are created (and take up memory space) but aren’t used… especially true of global variables</li>
                          <li>A single-threaded engine means there is only one call stack.  The call stack works in order of ‘first in, last out’.</li>
                          <li><span style={{color:"yellow"}}>Why is JS single-threaded?</span> Makes coding simpler than in a multi-threaded languages where issues concerning deadlocking are a problem.</li>
                          <li><span style={{color:"yellow"}}>Synchronous</span> processing is good bc it is simple and its order of execution is predictable but it can be slow for moderately complex tasks.</li>
                          <li><span style={{color:"yellow"}}>Asynchronous</span> programming can be achieved by using setTimeouts… u can control the order  of execution</li>
                        </ul>
                    </h3> 

                    <hr />

                    <h3 class="major" id="angular_react" style={{textAlign: "justify", fontWeight:"bold"}}>
                      <a href="#major"><img src={up_arrow} alt="return to top of page" style={{height: "1em", marginRight: "0.5em"}} /></a>History of Angular + React
                        <br /><br />
                        <ul>
                          <li>In the <span style={{color:"yellow"}}>90s and 00s</span>, there was only <span style={{color:"yellow"}}>HTML, CSS and JS</span>... connected to servers</li>
                          <li><span style={{color:"yellow"}}>Javascript</span> had to be manipulated to work across all the different browsers</li>
                          <li><span style={{color:"yellow"}}>jQuery</span> was created to solve the problem of cross-browser compatibility</li>
                          <li>As a result, applications became bigger and more complicated</li>
                          <li>Then <span style={{color:"yellow"}}>Backbone.js/AJAX</span> came along to organise the Javascript files leading to the creation of <span style={{color:"yellow"}}>Single Page Applications (SPAs)</span></li>
                          <li>Single Page Applications make websites faster because they have to communicate with the server fewer times; they only load relevant parts of a website</li>
                          <li><span style={{color:"yellow"}}>AngularJS</span> by Google came out in 2010 - its organising principle was packages and Model-View-Controller (MVC)</li>
                          <li>Applications became even more complex - developers struggled to debug and saw data flowing everywhere</li>
                          <li>In 2013, Facebook released <span style={{color:"yellow"}}>ReactJS</span> to fix the problem of poor architectural design</li>
                          <li>In 2014, AngularJS became just <span style={{color:"yellow"}}>Angular</span> - its architecture was completely rewritten and is now very good but, by then, the reputation of React had taken off</li>
                        </ul>
                    </h3>                              
                    
                    <hr />

                    <h3 id="success_react" style={{textAlign: "justify", fontWeight:"bold"}}>
                    <a href="#major"><img src={up_arrow} alt="return to top of page" style={{height: "1em", marginRight: "0.5em"}} /></a>Success of React
                        <br /><br />
                        <ul>
                          <li><span style={{color:"yellow"}}>Declarative Programming:</span> React will manipulate the DOM for you using state instead of <span style={{color:"yellow"}}>Imperative Programming</span> which uses libraries to directly manipulate the DOM</li>
                          <li><span style={{color:"yellow"}}>Component Architecture:</span> Websites/Projects can share components which makes code highly reusable - build websites like lego blocks</li>
                          <li><span style={{color:"yellow"}}>Uni-Directional Data Flow:</span> Data can only move downwards through an application via state changes located within various components as opposed to data going in every direction and becoming difficult to debug</li>
                          <li><span style={{color:"yellow"}}>The UI Library:</span> React can be used in many environments (cross-platform) because its just a UI library</li>
                        </ul>
                    </h3>

                    <hr />

                    <h3 class="major" id="plan_react" style={{textAlign: "justify", fontWeight:"bold"}}>
                    <a href="#major"><img src={up_arrow} alt="return to top of page" style={{height: "1em", marginRight: "0.5em"}} /></a>How To Plan a React App
                        <br /><br />
                        <ul>
                          <li><span style={{color:"yellow"}}>Decide which components to build:</span> Break the app down into small components</li>
                          <li><span style={{color:"yellow"}}>Decide what needs state and where it should be stored:</span> In multiple components or in just one/two</li>
                          <li><span style={{color:"yellow"}}>Decide which elements should be affected by state change:</span> Which parts of an application should be state-dependant?</li>
                        </ul>
                    </h3>

                    <hr />

                    <h3 id="refactoring" style={{textAlign: "justify", fontWeight:"bold"}}>
                    <a href="#major"><img src={up_arrow} alt="return to top of page" style={{height: "1em", marginRight: "0.5em"}} /></a>Refactoring Examples</h3>
                    <h4>For Loops vs Map Method</h4>
                    <div style={{display: "flex"}}>
                      <img style={{justifyContent: "center", width: "60%"}} src={for_loop} alt="example image of a for loop" />&nbsp;
                      <img style={{justifyContent: "center", height: "100%"}} src={map_array} alt="example image of a map" />
                    </div>

                    <br /><br />
                    <h4 id="for_of_for_in">For-Of vs For-In</h4>
                    <div style={{display: "flex"}}>
                      <img style={{justifyContent: "center", width: "50%"}} src={for_of_for_in} alt="example image of a for-in and for for-of loop" />&nbsp;
                    </div>

                    <hr />
                    
                </div>

            </section>
        </div>
    </Layout>
)

export default Notebook