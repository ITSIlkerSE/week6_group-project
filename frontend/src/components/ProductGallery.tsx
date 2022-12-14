import React from 'react';
import {Product} from "../model/Product";
import ProductCard from "./ProductCard";

type ProductGalleryProps = {

    products: Product[];

}

function ProductGallery(props: ProductGalleryProps) {
    const sorting = [...props.products].sort((a, b) => a.name > b.name ? 1 : -1)
    return (
        <div style={{display: "flex", flexWrap: "wrap",margin: "auto"}}>
            {sorting.map((product, index) =>
                <ProductCard product={product} key={index}/>
            )}
        </div>
    );
}

export default ProductGallery;