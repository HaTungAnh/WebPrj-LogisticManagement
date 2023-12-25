import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"
import {Anchor, BackTop} from "antd";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
                <Link className={"logo"} to={"./"}>Home</Link>

                <div className={"menu"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/features"}>Features</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;