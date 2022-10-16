import React, {useState} from 'react';
import "./Navbar.css";
import {Product} from "../model/Product";

type NavbarProps = {
    products: Product[];
}

function Navbar(props: NavbarProps) {

    const [data, setData] = useState("")
    const foundProducts = props.products.filter((product) => product.name.toLowerCase().includes(data))

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background: "darkslateblue", color: "#ffffff"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MyWardrobe</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width: "31%"}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/wardrobe/add">Add Product</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/wardrobe/about-us">Company</a></li>
                                <li><a className="dropdown-item" href="/wardrobe/about-us">About Us</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" style={{width: "80%"}}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: "85%"}}
                            onChange={(event) => setData(event.target.value)}
                        />
                            <button className="btn button-nav" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">cart</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;