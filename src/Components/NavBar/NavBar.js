import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
    return (
        <div className="navbar">
            <nav className="nav-items">
                <NavLink className="nav-bar-home" activeClassName="active" exact to="/">Helen Murphy</NavLink>
                <NavLink className="nav-bar-about" activeClassName="active" to="/about">About</NavLink>
                <NavLink className="nav-bar-experience" activeClassName="active" to="/experience">Experience</NavLink>
                <NavLink className="nav-bar-projects" activeClassName="active" to="/projects">Projects</NavLink>
            </nav>
        </div>
    )
}

export default NavBar;