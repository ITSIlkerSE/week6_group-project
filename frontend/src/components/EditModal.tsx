import React, {FormEvent, useState} from 'react';
import {Product} from "../model/Product";
import {useParams} from "react-router-dom";

type EditModalProps = {
    product: Product;
    products: Product[];
    editProduct: (id: string, product: Product) => void;
}

function EditModal(props: EditModalProps) {

    const params = useParams();
    const id = params.id;

    const findProduct = props.products.find((product) => product.id === id);
    console.log("found", findProduct)

    if (id === undefined) {
        return (<>Product not found with this id!</>)
    }

    if (findProduct === undefined) {
        return (<>Sorry no product found!</>)
    }

    const [product, setProduct] = useState(findProduct)

    const [name, setName] = useState(findProduct ? findProduct.name : "")
    const [description, setDescription] = useState(findProduct ? findProduct.description : "")
    const [image, setImage] = useState(findProduct ? findProduct.image : "")
    const [size, setSize] = useState(findProduct ? findProduct.size : "")
    const [price, setPrice] = useState(findProduct ? findProduct.price : "")
    const [category, setCategory] = useState(findProduct ? findProduct.category : "")
    const [brand, setBrand] = useState(findProduct ? findProduct.brand : "")
    const [rating, setRating] = useState(findProduct ? findProduct.rating : 0)
    const [inStock, setInStock] = useState(findProduct ? findProduct.inStock : false)


    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let updatedProduct: Product = {
            id,
            name,
            image,
            size,
            description,
            price,
            category,
            brand,
            rating,
            inStock
        }

        setProduct(updatedProduct);

        props.editProduct(id, updatedProduct);
        console.log("updated", updatedProduct);
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit <strong
                            style={{color: "darkslateblue"}}>{findProduct.name}</strong></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} style={{
                            margin: "auto",
                            width: "95%"
                        }}>
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="name"
                                required={true}
                                type="text"
                                value={name}
                                placeholder="Product Name"
                                onChange={(event) => setName(event.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                value={description}
                                placeholder="Product Description"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                value={image}
                                placeholder="Image"
                                onChange={(event) => setImage(event.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="size"
                                type="text"
                                value={size}
                                placeholder="Size"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="price"
                                type="text"
                                value={price}
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="category"
                                required={true}
                                type="text"
                                value={category}
                                placeholder="Category"
                                onChange={(event) => setCategory(event.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="brand"
                                required={true}
                                type="text"
                                value={brand}
                                placeholder="Brand"
                                onChange={(event) => setBrand(event.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="rating"
                                required={true}
                                type="number"
                                value={rating}
                                placeholder="Rating"
                                onChange={(event) => setRating(event.target.valueAsNumber)}
                            />
                            <div style={{display: "flex"}}>
                                <input
                                    style={{
                                        marginBottom: "10px",
                                        marginRight: "10px",
                                        border: "1px solid darkslateblue",
                                        width: "35px",
                                        height: "25px"
                                    }}
                                    className="form-check-input"
                                    name="inStock"
                                    type="checkbox"
                                    checked={inStock}
                                    placeholder="inStock"
                                    onChange={(e) => setInStock(e.target.checked)}
                                />
                                <p style={{fontSize: "large"}}> Product available? Click here if it is in Stock</p>
                            </div>
                            <div className="button-group">
                                <button type="submit" className="btn btn-info" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Edit <i className="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" className="btn btn-secondary" style={{width: "200px"}}
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;