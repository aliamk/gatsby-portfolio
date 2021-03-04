import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
            <title>Alia Malek Portfolio</title>
            <meta name="description" content="PickUpGames Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>PickUp Games</h1>
                    </header>

                    <h4 style={{textAlign: "justify", fontWeight:"bold"}}>
                        A social networking app made for sports enthusiasts who want like-minded users to play against
                        <br />Users can create game posts, edit and filter them, join games, upload photos and chat with other users
                        <br />Made with .Net Core on the backend, react on the frontend with CRUD functionality for communicating between the two                        
                        <br /><a href="https://github.com/aliamk/PickUpGames-MobX-Typescript" target='blank' style={{textDecoration:"underline"}}>Github Code</a>
                    </h4>

                    <hr />                    
                    <h4 style={{textAlign: "center", color:'yellow'}}><i>.Net Core - React - Typescript - MobX - Entity Framework - SqLite/MySql/SqlServer - Facebook Authentication - Semantic-UI</i></h4>                                     
                    <hr />                    
                    
                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}> Logging-in and out as a previously registered user with client-side form validation</p>
                    <span className="image main"><img src={log_in_bob} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Alternatively, facebook users can log-in via the second button (facebook issues an access token which this app verifies by sending it back to facebook and then generates a JWT token to the facebook user)</p>
                    <span className="image main"><img src={facebook_login} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>A logged-in user can return to the site without logging-in again because persistence has been added by sending data to the server.  Once in, a user can create a game - this form also has client-side validation</p>
                    <span className="image main"><img src={login_persistence_create_game} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Only the creator of a game can then edit it - the Manage button only appears if the user is also the creator</p>
                    <span className="image main"><img src={Edit_game_add_comment} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>A user can look up a game and join - multiple users can add messages in the chat box under every game (SignalR)</p>
                    <span className="image main"><img src={chat_widget} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>All games are filterable by date or by a user looking at games they've created, or going to, or all games (no filter)</p>
                    <span className="image main"><img src={filter} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>The registration form has client-side validation and generates an email verification for the user</p>
                    <span className="image main"><img src={register_user} alt="" /></span>

                    <p style={{marginBottom:"-1em", fontWeight:"bold"}}>Users can then log-in and add a profile picture</p>
                    <span className="image main"><img src={add_photos} alt="" /></span>

                    <hr />                    

                    <h5><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/35px-.NET_Core_Logo.svg.png"/><i>&nbsp;&nbsp;.NET:&nbsp; A framework for building a variety of apps that's liked for it's speed, versatility and scalability</i></h5>
                    <h5><img src="https://img.icons8.com/plasticine/45/000000/react.png"/><i>&nbsp;&nbsp;React:&nbsp; A library that allows declarative programming with reusable components and uni-directional data flow</i></h5>
                    <h5><img src="https://img.icons8.com/color/40/000000/typescript.png"/><i>&nbsp;&nbsp;Typescript:&nbsp; A language that lets you strongly-type Javascript so you can keep track of your data-types and use the latest features of Javascript</i></h5>
                    <h5><img src="https://api.iconify.design/logos-mobx.svg?height=30"/><i>&nbsp;&nbsp;&nbsp;&nbsp;MobX:&nbsp; A library that helps simplify components by moving state from local to central - make components 'observers' of state in stores using react 'context'</i></h5>
                    <h5><img src="https://img.icons8.com/nolan/40/data-configuration.png"/><i>&nbsp;&nbsp;&nbsp;Entity Framework:&nbsp; An Object-Relational Mapper that lets you communicate with a SQL database without having to use SQL queries</i></h5>                    
                    <h5><img src="https://img.icons8.com/nolan/45/sql.png"/><i>&nbsp;&nbsp;&nbsp;SQL:&nbsp; Used SqLite in development for seeding data and swapped it out for MySql and SqlServer at deployment</i></h5>
                    <h5><img src="https://api.iconify.design/logos-semantic-ui.svg?height=35"/><i>&nbsp;&nbsp;&nbsp;Semantic-UI:&nbsp; An easy to use style/theme framework with ready-to-use components and makes responsive layout easier to build</i></h5>
                    
                </div>

            </section>
        </div>

    </Layout>
)

export default PickUpGames