import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import cofffee_beans_whole_app from '../assets/images/cofffee_beans_whole_app.gif'
import loader_top_stories from '../assets/images/loader_top_stories.gif'
import log_in_bob from '../assets/images/log_in_bob.gif'
import investors_world_map from '../assets/images/investors_world_map.gif'
import wnba from '../assets/images/wnba.gif'
import handbook from '../assets/images/handbook.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Alia Malek Portfolio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${cofffee_beans_whole_app})`}}>
                            <header className="major">
                                <h3>LMD ROAST!</h3>
                                <p>REACT - REDUX - FIREBASE - GOOGLE AUTHENTICATION - NODE/EXPRESS - STRIPE</p>
                            </header>
                            <Link to="/lmdroast" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${loader_top_stories})`}}>
                            <header className="major">
                                <h3>Fit To Print</h3>
                                <p>JAVASCRIPT - DOM MANIPULATION - FETCH - ASYNC/AWAIT - CSS</p>
                            </header>
                            <Link to="/fit-to-print" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${log_in_bob})`}}>
                            <header className="major">
                                <h3>PickUp Games</h3>
                                <p>.NET - REACT - TYPESCRIPT - MOBX - FACEBOOK AUTHENTICATION - SQL - SEMANTIC-UI</p>
                            </header>
                            <Link to="/pickupgames" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${investors_world_map})`}}>
                            <header className="major">
                                <h3>RealFin</h3>
                                <p>JAVASCRIPT CHARTING LIBRARY</p>
                            </header>
                            <Link to="/realfinx-maps" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${wnba})`}}>
                            <header className="major">
                                <h3>WNBA - Social Media Reference</h3>
                                <p>Work in progress:  A 'one-stop-shop' for every current WNBA player's social media presence</p>
                            </header>
                            <Link to="/wnba" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${handbook})`}}>
                            <header className="major">
                                <h3>Notebook</h3>
                                <p>My notes on React, Javascript, Arrays, Objects, Refactoring and more</p>
                            </header>
                            <Link to="/notebook" className="link primary"></Link>
                        </article>
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Blog</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section> */}
                </div>

            </Layout>
        )
    }
}

export default HomeIndex