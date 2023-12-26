import React from "react";
import "./Feature.css"
import { Input, Button } from 'antd';

function Feature() {
    return (
        <div className={"feature-wrapper"}>
            <div className={"feature-container innerWidth paddings"}>
                <h1>Order Tracking</h1>
                <div className={"flexStart track-bar"}>
                    <Input className={"input"} placeholder={"Enter the order code you need to look up"} size={"large"}/>
                    <button className={"button"}>Track</button>
                </div>
            </div>
        </div>
    )
}

export default Feature;