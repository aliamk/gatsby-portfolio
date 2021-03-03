import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

import log_in_bob from '../assets/images/log_in_bob.gif'
import facebook_login from '../assets/images/facebook_login.gif'
import login_persistence_create_game from '../assets/images/login_persistence_create_game.gif'
import Edit_game_add_comment from '../assets/images/Edit_game_add_comment.gif'
import chat_widget from '../assets/images/chat_widget.gif'
import filter from '../assets/images/filter.gif'
import register_user from '../assets/images/register_user.gif'
import add_photos from '../assets/images/add_photos.gif'


const PickUpGames = (props) => (
    <Layout>
        <Helmet>
            <title>PickUp Games</title>
            <meta name="description" content="PickUpGames Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>PickUp Games</h1>
                    </header>

                    <h4 style={{textAlign: "justify", fontWeight:"bold"}}>A social networking app made for sports enthusiasts who 
                    want like-minded users to play against<br />
                    Users can create game posts, edit and filter them, join games, upload photos and chat with other users
                    <br />Made with .Net Core on the backend, react on the frontend with CRUD functionality for communicating between the two
                    <br /><br />
                    <i style={{color:'yellow'}}>.Net Core - react - typescript - MobX - Entity Framework - SqLite/MySql/SqlServer - Semantic-UI</i><br />
                    </h4>

                    <br />

                    <h5><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/35px-.NET_Core_Logo.svg.png"/><i>&nbsp;&nbsp;.NET:&nbsp; A framework for building a variety of apps that's liked for it's speed, versatility and scalability</i></h5>
                    <h5><img src="https://img.icons8.com/plasticine/45/000000/react.png"/><i>&nbsp;&nbsp;React:&nbsp; A language that lets you strongly-type Javascript so you can keep track of your data-types and use the latest features of Javascript</i></h5>
                    <h5><img src="https://img.icons8.com/color/40/000000/typescript.png"/><i>&nbsp;&nbsp;Typescript:&nbsp; For users to manually sign-in and be authenticated/stored on the Firebase database</i></h5>
                    <h5><img src="https://api.iconify.design/logos-mobx.svg?height=30"/><i>&nbsp;&nbsp;&nbsp;&nbsp;MobX:&nbsp; A library that helps simplify components by moving state from local to central - make components 'observers' of state in stores using react 'context'</i></h5>
                    <h5><img src="https://img.icons8.com/nolan/40/data-configuration.png"/><i>&nbsp;&nbsp;&nbsp;Entity Framework:&nbsp; An Object-Relational Mapper that lets you communicate with a SQL database without having to use SQL queries</i></h5>                    
                    <h5><img src="https://img.icons8.com/nolan/45/sql.png"/><i>&nbsp;&nbsp;&nbsp;SQL:&nbsp; Used SqLite in development for seeding data and swapped it out for MySql and SqlServer at deployment</i></h5>
                    <h5><img src="https://api.iconify.design/logos-semantic-ui.svg?height=35"/><i>&nbsp;&nbsp;&nbsp;Semantic-UI:&nbsp; An easy to use style/theme framework with ready-to-use components and makes responsive layout easier to build</i></h5>
                    
                    <br />
                    
                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Overview of app</p>
                    <span className="image main"><img src={log_in_bob} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Checking-out with payment and address details via the Stripe API</p>
                    <span className="image main"><img src={facebook_login} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Manually signing-in as an existing user and having user data requested from the Firebase database</p>
                    <span className="image main"><img src={login_persistence_create_game} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={Edit_game_add_comment} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={chat_widget} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={filter} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={register_user} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Signing-in and being authenticated as a Google user</p>
                    <span className="image main"><img src={add_photos} alt="" /></span>
                </div>

            </section>
        </div>

    </Layout>
)

export default PickUpGames