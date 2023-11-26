import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import './Home.css'
import Cart from "../Cart/Cart";

function Home() {
  const tshirts = useLoaderData();
  const [cart , setCart]= useState([]);
  const handleAddToCart = tshirt =>{
    const newCart =[...cart , tshirt];
    setCart(newCart)
  }
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((a) => (
          <Tshirt a={a} key={a._id} handleAddToCart= {handleAddToCart} > </Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
}

export default Home;
