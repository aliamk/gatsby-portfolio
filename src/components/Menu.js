import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/lmdroast">LMD Roast!</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/fit-to-print">Fit To Print</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/pickupgames">PickUp Games</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/realfinx-maps">RealFin Maps</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/notebook">Notebook</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
