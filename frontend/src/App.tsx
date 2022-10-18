import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import useProduct from "./hooks/useProduct";
import Navbar from "./components/Navbar";
import AddProductForm from "./pages/AddProductForm";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import LazyDeveloper from "./pages/LazyDeveloper";

function App() {

    const {
        addNewProduct,
        deleteProduct,
        editProduct,
        product,
        products
    } = useProduct();

  return (
      <div>
      <Navbar products={products}/>

    <HashRouter>
      <Routes>
          <Route path={"/"} element={<Homepage
            products={products}
          />}/>
          <Route path={"/wardrobe/add"} element={<AddProductForm
              product={product}
              addProduct={addNewProduct}
          />}/>
          <Route path={"/wardrobe/:id"} element={<ProductDetails
              products={products}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
          />}/>
          <Route path={"/wardrobe/about-us"} element={<AboutUs />}/>
          <Route path={"/wardrobe/add-to-cart"} element={<LazyDeveloper />}/>
      </Routes>
    </HashRouter>
          <Footer />
      </div>
  );
}

export default App;
