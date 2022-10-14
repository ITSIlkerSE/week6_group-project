import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import useProduct from "./hooks/useProduct";
import Navbar from "./components/Navbar";
import AddProductForm from "./pages/AddProductForm";

function App() {

    const {
        getAllProducts,
        getProductById,
        addNewProduct,
        deleteProduct,
        editProduct,
        product,
        products
    } = useProduct();

  return (
      <div>
      <Navbar />

    <Router>
      <Routes>
        <Route path="/" element={<Homepage
            product={product}
            products={products}
        />}/>
          <Route path="/wardrobe/add" element={<AddProductForm
              product={product}
              addProduct={addNewProduct} />}/>
      </Routes>
    </Router>
      </div>
  );
}

export default App;
