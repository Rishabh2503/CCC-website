import React from "react";
import web from "../Preloader/8.png";
import "../Preloader/preloader.css"
const Preloader =() => {
    return (
        <>
            <div id="container">
        <div id="load">
            <img src={web} alt="" />
        </div>
    </div>
        </>
    )
}
export default Preloader;