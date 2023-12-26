import React, {useState} from "react";
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css"
import {Anchor, BackTop} from "antd";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className={"navbar-wrapper"}>
            <div className={"flexCenter paddings innerWidth navbar-container"}>
                <img src={"./logo.png"} alt={"logo"} width={100} height={100}/>

                <div className={"flexCenter menu"}>
                    <a href={""}>About</a>
                    <a href={""}>Feature</a>
                    <a href={""}>Contact</a>
                </div>
            </div>
        </section>
        // <nav>
        //         <Link className={"logo"} to={"./"}>Home</Link>
        //
        //         <div className={"menu"}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
        //
        //         <ul>
        //             <li>
        //                 <NavLink to={"/about"}>About</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to={"/features"}>Features</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to={"/contact"}>Contact</NavLink>
        //             </li>
        //         </ul>
        // </nav>
    )
}

export default Navbar;