import React from 'react';
import {NavLink} from 'react-router-dom';
import '../CSS/TopBar.css';

function TopBar() {
    return (
        <div className="navbar">
            {/* <Navbar fixed="top" bg="light" variant="light">
                <Navbar.Brand href="/">Helen Murphy</Navbar.Brand>
            </Navbar> */}
            <nav className="nav-items">
                <NavLink className="nav-bar-home" activeClassName="active" exact to="/">Helen Murphy</NavLink>
                <NavLink className="nav-bar-about" activeClassName="active" to="/about">About</NavLink>
                <NavLink className="nav-bar-experience" activeClassName="active" to="/experience">Experience</NavLink>
                <NavLink className="nav-bar-projects" activeClassName="active" to="/projects">Projects</NavLink>
            </nav>
        </div>
    )
}

export default TopBar;