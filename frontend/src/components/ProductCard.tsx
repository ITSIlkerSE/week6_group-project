import React from 'react';
import "./ProductCard.css";
import {Product} from "../model/Product";

type ProductCardProps = {

    product: Product;

}

function ProductCard(props: ProductCardProps) {

    return (
        <div className="card">
            <img src={props.product.image} className="card-img-top" style={{height: "190px"}}/>
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.product.name}</strong></h5>
                    <p className="list-group-item price">${props.product.price}</p>
                    <p className="list-group-item">Rating?</p>

                </div>

            <div className="gap-2 d-md-flex justify-content-md-center">
                <button className="btn me-md-2 button1" type="button">SEE DETAILS</button>
                <button className="btn me-md-2 button2" type="button">ADD TO CART</button>
            </div>
        </div>
    );
}

export default ProductCard;