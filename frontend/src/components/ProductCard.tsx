import React, {useState} from 'react';
import "./ProductCard.css";
import {Product} from "../model/Product";
import {Link, useNavigate} from "react-router-dom";

type ProductCardProps = {
    product: Product;
}

function ProductCard(props: ProductCardProps) {

    let golden = [];
    for(let i = 0; i < props.product.rating; i++) {
        golden.push(<i className="fa-solid fa-star" key={i}></i>)
    }

    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate(`/wardrobe/:id`)
    }

    const navigateToLazyDeveloper = () => {
        navigate("/wardrobe/add-to-cart")
    }

    return (
        <div className="card">
            <img src={props.product.image} className="card-img-top" style={{height: "190px"}}/>
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.product.name}</strong></h5>
                    <p className="list-group-item price">${props.product.price}</p>
                    <p style={{color: "#E6C700"}}>{golden}</p>
                </div>

            <div className="gap-2 d-md-flex justify-content-md-center buttons">
                <Link to={"/wardrobe/" + props.product.id}>
                    <button className="btn me-md-2 button1" type="button" onClick={navigateToDetails}>SEE DETAILS</button>
                </Link>
                <button className="btn me-md-2 button2" type="button" onClick={navigateToLazyDeveloper}>ADD TO CART</button>
            </div>
        </div>
    );
}

export default ProductCard;