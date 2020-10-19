import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    return (
        <div className="navbar">
            <nav className="nav-items">
                <NavLink className="nav-bar-home" activeClassName="active" exact to="/">Helen Murphy</NavLink>
                <NavLink className="nav-bar-experience" activeClassName="active" to="/experience">Experience</NavLink>
                <NavLink className="nav-bar-projects" activeClassName="active" to="/projects">Projects</NavLink>
            </nav>
            <div className="img-links">
                <a className="nav-bar-gh" href="https://github.com/helzers"><img src={process.env.PUBLIC_URL + '/Images/Nav/GH.png'} alt="GitHub"/></a>
                <a className="nav-bar-li" href="https://www.linkedin.com/in/helen-murphy-8895b6107/"><img src={process.env.PUBLIC_URL + '/Images/Nav/linkedin-512.png'} alt="LinkedIn"/></a>
            </div>
        </div>
    )
}

export default NavBar;