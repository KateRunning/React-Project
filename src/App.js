import React, { useState } from "react";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import SearchResults from "./components/SearchResults";
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import { PRODUCT_DATA } from "./components/ProductData";
import ShoppingCart from "./components/ShoppingCart";
import Commerce from '@chec/commerce.js';
import ReviewForm from "./components/ReviewForm";
import ClassPage from "./components/ClassPage";
import useLocalStorage from "./hooks/useLocalStorage";
let nextId = 10;

export default function App() {
  const [cart, setCart] = useLocalStorage('cart', [])
  // const [cart, setCart] = useState([{ id: 0, productTitle: "Toad" }])
  const [productList, setProductList] = useLocalStorage('productList', PRODUCT_DATA)

  const [products, setProducts] = useLocalStorage('products',[])

  const addToCart = (product) => {
    const newCartItem = {
      productTitle: product.title,
      id: product.id,
      // number: 0
    }
    setCart(cart.concat(newCartItem))
  }
  products.number++;


  const removeFromCart = (id) => {

    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    console.log('delete')
  }


  return (
    <>
      <TopBar cart={cart}/>
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage productList={productList} />} />
          <Route path='/classes' element={<ClassPage />} />
          <Route path='/reviews' element={<ReviewForm />} />
          <Route path='/product/:productId' element={<ProductDetailsPage productList={productList} addToCart={addToCart} />} />
          <Route path='/search/:searchQuery' element={<SearchResults productList={productList} />} />
          <Route path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </Container>
    </>
  )

}


