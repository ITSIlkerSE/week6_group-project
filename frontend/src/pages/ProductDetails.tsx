import React from 'react';
import "./ProductDetails.css";
import {Product} from "../model/Product";
import {Link, useParams} from "react-router-dom";

type ProductDetailsProps = {
    products: Product[];
}

function ProductDetails(props: ProductDetailsProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Product not found with this id!</>)
    }

    const product = props.products.find((product) => product.id === id)
    console.log(product)

    if (product === undefined) {
        return (<>Sorry no product found!</>)
    }

    return (
        <div className="details-container">
            <Link to={"/"}>
                <button className="btn button-add" style={{marginLeft: "20px", marginTop: "20px"}}>BACK
                </button>
            </Link>
            <div className="left-side">
                <img src={product.image} className="details-image"/>
            </div>
            <div className="right-side">
                <div className="info-group">
                    <h1>{product.name}</h1>
                    <p>{product.brand}</p>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.size}</p>
                    <p><strong>${product.price}</strong></p>
                    <p>{product.inStock}</p>
                    <button className="btn me-md-2 button1" type="button">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;