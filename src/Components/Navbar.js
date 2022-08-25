import React from "react";
import "./Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                <Link to="/">PlugSpot</Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;