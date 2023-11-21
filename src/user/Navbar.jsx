import React, {useState} from "react";

import {Link, NavLink} from 'react-router-dom'

import "./Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            {/* Change this to logo -> click logo to return header */}
            <Link className={"logo"} to={"/"}>Home</Link>

            <div className={"menu"} onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : "close"}>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/features"}>Features</NavLink>
                </li>
                <li>
                    <NavLink to={"/feedback"}>Feedback</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;