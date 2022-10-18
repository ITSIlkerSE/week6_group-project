import React, {FormEvent, useState} from 'react';
import "./AddProductForm.css";
import {Product} from "../model/Product";
import {Link, useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

type AddProductFormProps = {
    product: Product;
    addProduct: (product: Product) => void;
}

function AddProductForm(props: AddProductFormProps) {

    const [product, setProduct] = useState(props.product)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [size, setSize] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [rating, setRating] = useState(0)
    const [inStock, setInStock] = useState(false)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let product = {
            name,
            description,
            image,
            size,
            price,
            category,
            brand,
            rating,
            inStock
        }

        setProduct(product);
        if (product) {
            props.addProduct(product)
            console.log(product)
            setName("")
            setDescription("")
            setImage("")
            setSize("")
            setPrice("")
            setCategory("")
            setBrand("")
            setRating(0)
            setInStock(false)
        }

        successProduct()

        setTimeout(() => {
            routeChange()
        }, 1000);

    }

    const successProduct = () => toast.success("Product successfully added!");
    const error = () => toast.error("Oops! An error occurred.");

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/`;
        navigate(path);
    }

    return (
        <>
        <div>
            <Link to={"/"}>
                <button className="btn button-add" style={{marginLeft: "20px", marginTop: "20px"}}>BACK
                </button>
            </Link>

            <form onSubmit={handleSubmit} style={{
                margin: "auto",
                width: "75%"
            }}>
                <input
                    style={{
                        marginBottom: "10px",
                        marginTop: "30px",
                        border: "1px solid darkslateblue"
                }}
                    className="form-control"
                    name="name"
                    required={true}
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="description"
                    required={true}
                    rows={3}
                    placeholder="product description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="image"
                    type="text"
                    placeholder="image"
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="size"
                    type="text"
                    placeholder="size"
                    onChange={(e) => setSize(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="price"
                    type="text"
                    placeholder="price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="category"
                    required={true}
                    type="text"
                    placeholder="category"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="brand"
                    required={true}
                    type="text"
                    placeholder="brand"
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    style={{
                        marginBottom: "10px",
                        border: "1px solid darkslateblue"
                    }}
                    className="form-control"
                    name="rating"
                    required={true}
                    type="number"
                    placeholder="rating"
                    onChange={(e) => setRating(e.target.valueAsNumber)}
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
                    placeholder="inStock"
                    onChange={(e) => setInStock(e.target.checked)}
                />
                    <p style={{fontSize: "large"}}> Product available? Click here if it is in Stock</p>
                </div>
                <div className="button-group">
                    <button type="submit" className="btn button-add"
                            style={{width: "200px"}}>ADD PRODUCT
                    </button>
                    <button type="button" className="btn btn-secondary button-clear" style={{width: "200px"}}
                            data-bs-dismiss="modal">CLEAR
                    </button>
                </div>
            </form>
        </div>
    <Toaster position="top-center"
             reverseOrder={true} />
        </>
    );
}

export default AddProductForm;