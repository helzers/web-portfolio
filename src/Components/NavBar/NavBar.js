import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    return (
        <nav className="nav-items">
            <NavLink className="nav-bar-home" activeClassName="active" exact to="/">Helen Murphy</NavLink>
            <NavLink className="nav-bar-experience" activeClassName="active" to="/experience">Experience</NavLink>
            <NavLink className="nav-bar-projects" activeClassName="active" to="/projects">Projects</NavLink>
            <div className="img-links">
                <a className="nav-bar-gh" href="https://github.com/helzers"><img src="/Images/Nav/GH.png" alt="GitHub"/></a>
                <a className="nav-bar-li" href="https://www.linkedin.com/in/helen-murphy-8895b6107/"><img src="/Images/GH.png" alt="LinkedIn"/></a>
            </div>
        </nav>
    )
}

export default NavBar;