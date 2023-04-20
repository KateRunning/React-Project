import React, { useState } from "react";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import SearchResults from "./components/SearchResults";
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import { PRODUCT_DATA } from "./components/ProductData";
import ShoppingCart from "./components/ShoppingCart";
import { deleteProduct } from "./components/EditProduct";
import Commerce from '@chec/commerce.js';
let nextId = 10;

export default function App() {
  const [cart, setCart] = useState([{ id: 0, productTitle: "Toad"}])
  const [productList, setProductList] = useState(PRODUCT_DATA)

  const [products, setProducts] = useState([])

  const addToCart = (product) => {
    const newCartItem = {
      productTitle: product.title,
      id: product.id,
      number: 0
    }
    setCart(cart.concat(newCartItem))
  }
  products.number++;

// const addToCart = (product) => {
//     const newCartItem = {
//       productTitle: product.title,
//       id: nextId++
//     }
//     setCart(cart.concat(newCartItem))
// }
// const removeFromCart = async (id) => {
//   await deleteProduct(id)
//   setCart(productList.filter(p => p.id !== id))
//   console.log('delete')
// }
function removeFromCart(id) {
  const newCartItem = cart.find(i => i.id === id);
  products.number--;
  if(products.number === 0) {
    cart.splice(cart.indexOf(newCartItem), 1);
  }

}


  return (
    <>
      <TopBar/>
      <Container>
        <Routes>
          <Route path='/' element={ <HomePage productList={productList}/> }/>
          <Route path='/product/:productId' element={ <ProductDetailsPage productList={productList} addToCart={addToCart}/> }/>
          <Route path='/search/:searchQuery' element={ <SearchResults productList={productList}/> }/>
          <Route path='/cart' element={ <ShoppingCart cart={cart} removeFromCart={removeFromCart}/> }/>
        </Routes>
      </Container>
    </>
  )

}


