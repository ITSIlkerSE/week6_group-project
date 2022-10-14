import React from 'react';
import {Product} from "../model/Product";
import ProductGallery from "../components/ProductGallery";

type HomepageProps = {

    products: Product[];

}

function Homepage(props: HomepageProps) {
    return (
        <div className="homepage-container">
            <ProductGallery products={props.products} />
        </div>
    );
}

export default Homepage;