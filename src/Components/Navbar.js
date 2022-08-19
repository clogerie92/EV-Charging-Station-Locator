import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                <a href="/">PlugSpot</a>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><a href="/">Home-About</a></li>
                    <li><a href="/">Signin</a></li>
                    <li><a href="/">Signup</a></li>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Contact-Landing</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;