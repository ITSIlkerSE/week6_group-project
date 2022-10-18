import React from 'react';
import "./LazyDeveloper.css";
import {Link} from "react-router-dom";

function LazyDeveloper() {
    return (
        <div className="lazy-container">
            <Link to={"/"}>
                <button className="btn button-add" style={{marginLeft: "20px", marginTop: "20px"}}>BACK
                </button>
            </Link>
            <div className="lazy-text">
                <h2>Hi! Thanks for clicking on this button.</h2>
                <h2>Come back tomorrow and maybe it works!</h2>
            </div>
            <div className="lazy-image">
                <img src={"https://media.tenor.com/njhl2B0E5q8AAAAM/spongebob-procrastination.gif"} alt={""} style={{height: "300px", width: "400px"}}/>
            </div>
        </div>
    );
}

export default LazyDeveloper;