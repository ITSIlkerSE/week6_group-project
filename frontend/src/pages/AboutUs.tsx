import React from 'react';
import "./AboutUs.css";
import {Link} from "react-router-dom";

function AboutUs() {
    return (
        <div>
            <Link to={"/"}>
                <button className="btn button-add" style={{marginLeft: "20px", marginTop: "20px"}}>BACK
                </button>
            </Link>
        <div className="about-container">
            <h1 className="title">MyWardrobe Leadership</h1>
            <hr />
            <div className="person1">
                <img src={"https://ca.slack-edge.com/TTHG21AH3-U03UWUKA7PG-67c38776c4db-512"} className="image"/>
                <div className="person1-text">
                    <h1>Galina Kolesnikova</h1>
                    <h5>Data Encryption</h5>
                    <p className="p1">Galina is a co-founder of MyWardrobe and she is responsible for handling and
                        overseeing the encryption of all of our data. Rest assured that your data is
                        being protected 24/7</p>
                </div>
            </div>
            <hr />
            <div className="person2">
                <div className="person2-text">
                    <h1>Ilker Yildirim</h1>
                    <h5>Backend and IT</h5>
                    <p className="p2">Ilker is a co-founder of MyWardrobe and he is responsible for making sure the
                        backend and IT are performing at optimal capacities.
                    </p>
                </div>
                <img src={"https://ca.slack-edge.com/TTHG21AH3-U03UXSNHTM4-7cbe758cc7ff-512"} className="image"/>
            </div>
            <hr />
            <div className="person3">
                <img src={process.env.PUBLIC_URL + "/images/spongebob.png"} className="image"/>
                <div className="person3-text">
                    <h1>Ryan Shade</h1>
                    <h5>Frontend and UI</h5>
                    <p className="p3">Ryan is a co-founder of MyWardrobe and he is responsible for customer and user
                        interaction with MyWardrobe. His motto is, "the site should look good and be easy to use".
                    </p>
                </div>
            </div>
        </div>
            <span className="bottom-filler"></span>
        </div>
    );
}

export default AboutUs;