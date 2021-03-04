import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons" style={{textAlign: "center"}}>
                <li><a href="https://github.com/aliamk" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/alia-mk/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                <br />
                <br />
                <li><i style={{fontSize:"0.8em"}} className="icon alt fa-google"></i>&nbsp;&nbsp;malek.alia@gmail.com</li>
                {/* <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                {/* <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li> */}
                {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
            </ul>
            {/* <ul className="copyright">
                <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul> */}
        </div>
    </footer>
)

export default Footer
