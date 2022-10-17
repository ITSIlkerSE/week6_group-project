import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../model/Product";

function UseProduct() {

    const [products, setProducts] = useState([]);
    let product!: Product;

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        axios.get("/api/wardrobe")
            .then((response) => response.data)
            .then((products) => setProducts(products))
    }

    const addNewProduct = (product: Product) => {
        axios.post("/api/wardrobe", product)
            .then(getAllProducts)
    }

    const getProductById = (id: string) => {
        axios.get(`/api/wardrobe/${id}`)
            .then(response => response.data);
    }

    const deleteProduct = (id: string) => {
        axios.delete("/api/wardrobe/" + id)
            .then(() => getAllProducts())
    }

    const editProduct = (id: string, product: Product) => {
        axios.put(`/api/wardrobe/${id}`, product)
            .then(getAllProducts)
            .catch(error => error)
    }

    return {
        getAllProducts,
        addNewProduct,
        getProductById,
        deleteProduct,
        editProduct,
        product,
        products
    }
}

export default UseProduct;