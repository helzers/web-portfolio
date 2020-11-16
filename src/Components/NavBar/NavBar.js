import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    
    var isToggled = () => {
        setMenuToggle(!isMenuToggled);
        console.log(isMenuToggled);
    }

    var [isMenuToggled, setMenuToggle] = useState(false);
    
    return (
        <div className="navbar">
            <div className="mobile-logo">
                <img src={process.env.PUBLIC_URL + '/Images/Nav/HMSemiBold.png'} alt="logo"/>
            </div>
            <nav className={isMenuToggled ? 'nav-items responsive' : 'nav-items'}>
                <NavLink className="nav-bar-home" activeClassName="active" exact to="/">Helen Murphy</NavLink>
                <NavLink className="nav-bar-experience" activeClassName="active" exact to="/experience">Experience</NavLink>
                <NavLink className="nav-bar-projects" activeClassName="active" exact to="/projects">Projects</NavLink>
            </nav>
            <div className="img-links">
                <a className="nav-bar-gh" href="https://github.com/helzers"><img src={process.env.PUBLIC_URL + '/Images/Nav/GH.png'} alt="GitHub"/></a>
                <a className="nav-bar-li" href="https://www.linkedin.com/in/helen-murphy-8895b6107/"><img src={process.env.PUBLIC_URL + '/Images/Nav/linkedin-512.png'} alt="LinkedIn"/></a>
            </div>
            <div className="mobile-icon" onClick={isToggled}>
                <span className="menu-btn"><img src={process.env.PUBLIC_URL + "/Images/Nav/menu.png"} alt="Menu" /></span>
            </div>
        </div>
    )
}

export default NavBar;