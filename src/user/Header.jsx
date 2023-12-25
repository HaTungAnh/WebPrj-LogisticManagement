import React from "react";
import "./Header.css";

function Header() {
    return (
        <section className={"header-wrapper"}>
            <div className={"paddings flexCenter header-container"}>
                {/*left side*/}
                <div className={"flexColStart header-left"}>
                    <div className={"header-title"}>
                        <div className={"orange-circle"}/>
                        <h1>
                            Connecting the World, <br/>
                            Delivering Possibilities!
                        </h1>
                    </div>

                    <div className={"flexColStart  header-des"}>
                        <span>Empowering commerce globally, our logistics pave paths for myriad possibilities.</span>
                        <span>Bridging distances, we unlock diverse opportunities with seamless logistics solutions.</span>
                    </div>
                </div>

                {/*right side*/}
                <div className={"flexCenter header-right"}>
                    <div className={"image-container"}>
                        <img src={"./header-img.png"} alt={"header-image"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;