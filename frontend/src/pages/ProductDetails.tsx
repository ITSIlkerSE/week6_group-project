import React from 'react';
import "./ProductDetails.css";
import {Product} from "../model/Product";
import {Link, useParams} from "react-router-dom";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";

type ProductDetailsProps = {
    products: Product[];
    editProduct: (id: string, product: Product) => void;
    deleteProduct: (id: string) => void;
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
        <div className="main-container">
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
                        <p><strong>Brand: </strong>{product.brand}</p>
                        <p><strong>Description: </strong>{product.description}</p>
                        <p><strong>Category: </strong>{product.category}</p>
                        <p><strong>Size: </strong>{product.size}</p>
                        <p><strong>${product.price}</strong></p>
                        {product.inStock ?
                            <p style={{color: "green"}}>In Stock</p>
                            :
                            <p style={{color: "red"}}>Out of Stock</p>
                        }

                        <button className="btn me-md-2 button1" type="button">ADD TO CART</button>
                    </div>
                </div>
            </div>
                <hr style={{marginBottom: "40px", marginTop: "40px"}}/>
                <h3 style={{textAlign: "center", color: "darkslateblue"}}>Admin Controls</h3>
                <div className="edit-delete-buttons">
                    <EditModal product={product} products={props.products} editProduct={props.editProduct} />
                    <button
                        className="btn me-md-2 btn-outline-secondary"
                        style={{width: "100px"}}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        >Edit
                    </button>
                    <DeleteModal product={product} deleteProduct={props.deleteProduct} />
                    <button
                        className="btn me-md-2 btn-outline-danger"
                        style={{width: "100px"}}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        >Delete
                    </button>
                </div>
            </div>
    );
}

export default ProductDetails;