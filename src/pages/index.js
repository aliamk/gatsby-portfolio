import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import cofffee_beans_whole_app from '../assets/images/cofffee_beans_whole_app.gif'
import loader_top_stories from '../assets/images/loader_top_stories.gif'
import log_in_bob from '../assets/images/log_in_bob.gif'
import investors_world_map from '../assets/images/investors_world_map.gif'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
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
                                <p>React - Redux - Firebase - Google API - Node/Express - Stripe</p>
                            </header>
                            <Link to="/lmdroast" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${loader_top_stories})`}}>
                            <header className="major">
                                <h3>Fit To Print</h3>
                                <p>Javascript - DOM Manipulation - Fetch - Async/Await - CSS</p>
                            </header>
                            <Link to="/fit-to-print" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${log_in_bob})`}}>
                            <header className="major">
                                <h3>PickUp Games</h3>
                                <p>.Net Core - react - typescript - MobX - Entity Framework - SqLite/MySql/SqlServer - Semantic-UI</p>
                            </header>
                            <Link to="/pickupgames" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${investors_world_map})`}}>
                            <header className="major">
                                <h3>Investors World Map - RealFinX</h3>
                                <p>Javascript Charting Library</p>
                            </header>
                            <Link to="/realfinx-maps" className="link primary"></Link>
                        </article>
                        {/* <article style={{backgroundImage: `url(${various_charts})`}}>
                            <header className="major">
                                <h3>Investor Details Page - RealFinX</h3>
                                <p>Javascript Charting Library</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${investors_barchart})`}}>
                            <header className="major">
                                <h3>Annual Investments - RealFinX</h3>
                                <p>Javascript Charting Library</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
                    </section>
                    {/* <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
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