import React from 'react'


const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Alia Malek</h1>
                <ul className="icons">                
                    <li><a href="https://github.com/aliamk" className="icon alt fa-github" target="_blank" rel="noreferrer"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/alia-mk/" className="icon alt fa-linkedin" target="_blank" rel="noreferrer"><span className="label">LinkedIn</span></a></li>                    
                </ul>    
            </header>
            <div className="content">
                <p><i className="fa fa-level-up fa-10x" aria-hidden="true" style={{color:"yellow", transform:"scaleX(-1)"}}></i>&nbsp;Let's talk&nbsp;<p></p>
                Browse a few of my past projects + see what I've been up to recently&nbsp;<i className="fa fa-level-down fa-10x" aria-hidden="true" style={{color:"yellow"}}></i></p> 
                {/* <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul> */}
            </div>
        </div>
    </section>
)

export default Banner