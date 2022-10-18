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
                <img src={"http://www.quickmeme.com/img/ff/ffbc493f104f71cf71eaae27d3fc77c0ccbb1215d78eb0024e3e4eb1c6c79524.jpg"}/>
            </div>
        </div>
    );
}

export default LazyDeveloper;