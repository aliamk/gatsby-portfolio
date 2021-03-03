import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import cofffee_beans_whole_app from '../assets/images/cofffee_beans_whole_app.gif'
import cofffee_beans_checkout from '../assets/images/cofffee_beans_checkout.gif'
import cofffee_beans_manual_sign_in from '../assets/images/cofffee_beans_manual_sign_in.gif'
import cofffee_beans_google_sign_in from '../assets/images/cofffee_beans_google_sign_in.gif'


const LMDRoast = (props) => (
    <Layout>
        <Helmet>
            <title>LMD Roast!</title>
            <meta name="description" content="LMDRoast Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">

                <div className="inner">
                    <header className="major">
                        <h1>LMD Roast!</h1>                   
                    </header>

                    <h4 style={{textAlign: "justify", fontWeight:"bold"}}>An e-commerce site with cloud storage, third-party authentication and payment for people who want the
                        rarest coffee beans and want them now.<br /><br /><i style={{color:'yellow'}}>React - Redux - Firebase - Google API - Node/Express - Stripe</i><br />This app was deployed by <a href="https://lmd-roast.herokuapp.com/" target='blank' style={{textDecoration:"underline"}}>
                        Heroku</a> which can be slow to load so it may be a good time to get a cup of coffee while you wait
                        <span style={{fontSize:'50px'}}>&#9749;</span>
                    </h4>

                    <h5><img src="https://img.icons8.com/plasticine/50/000000/react.png"/><i>&nbsp;React:&nbsp; A library that allows declarative programming with reusable components and uni-directional data flow</i></h5>
                    <h5><img src="https://img.icons8.com/color/40/000000/redux.png"/><i>&nbsp;&nbsp;Redux:&nbsp; For switching from local to single + global sources of state in order to future-proof the app by making it scalable</i></h5>
                    <h5><img src="https://img.icons8.com/color/35/000000/firebase.png"/><i>&nbsp;&nbsp;Firebase:&nbsp; For users to manually sign-in and be authenticated/stored on the Firebase database</i></h5>
                    <h5><img src="https://img.icons8.com/color/30/000000/google-logo.png"/><i>&nbsp;&nbsp;Google API:&nbsp; For users to be authenticated and sign-in with their Google accounts</i></h5>
                    <h5><img src="https://img.icons8.com/color/50/000000/nodejs.png"/><i>&nbsp;&nbsp;&nbsp;Node + Express:&nbsp; Used as a backend for the processing of Stripe payments</i></h5>                    
                    <h5><img src="https://img.icons8.com/fluent/40/000000/stripe.png"/><i>&nbsp;&nbsp;&nbsp;Stripe API:&nbsp; For users to easily pay for their items</i></h5>
                    
                    
                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Overview of app</p>
                    <span className="image main"><img src={cofffee_beans_whole_app} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Checking-out with payment and address details via the Stripe API</p>
                    <span className="image main"><img src={cofffee_beans_checkout} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Manually signing-in as an existing user and having user data requested from the Firebase database</p>
                    <span className="image main"><img src={cofffee_beans_manual_sign_in} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={cofffee_beans_google_sign_in} alt="" /></span>
                </div>

            </section>
        </div>
    </Layout>
)

export default LMDRoast