import React from 'react'
import './Cart'

function Cart({cart}) {
  return (
    <div>
      <h2> Order Summery: {cart.length} </h2>
    </div>
  )
}

export default Cart
