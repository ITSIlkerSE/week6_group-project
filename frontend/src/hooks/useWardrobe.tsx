import axios from "axios";
import {useEffect, useState} from "react";
import {MyWardrobeModel} from "../model/MyWardrobeModel";


export default function UseWardrobe() {

    const [wardrobes, setWardrobes] = useState([]);
    let product!: MyWardrobeModel;

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        axios.get("/api/wardrobe")
            .then((response) => response.data)
            .then((wardrobes) => setWardrobes(wardrobes))
    }

    const addNewProduct = (product: MyWardrobeModel) => {
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

    const editProduct = (id: string) => {
        axios.put(`/api/wardrobe/${id}`, product)
            .then(getAllProducts)
    }

    return {wardrobes, getAllProducts, addNewProduct, getProductById,deleteProduct, editProduct};
}