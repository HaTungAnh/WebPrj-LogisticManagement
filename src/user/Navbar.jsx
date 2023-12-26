import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"
import {Anchor, BackTop} from "antd";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className={"navbar-wrapper"}>
            <div className={"flexCenter paddings innerWidth navbar-container"}>
                <img src={"./logo.png"} alt={"logo"} width={200} height={100} style={{objectFit: "contain"}}/>

                <div className={"flexCenter menu"}>
                    <a href={""}>About</a>
                    <a href={""}>Feature</a>
                    <a href={""}>Contact</a>
                </div>
            </div>
        </section>
    )
}

export default Navbar;