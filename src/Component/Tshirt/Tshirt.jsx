import React from 'react';
import './Tshirt.css'

const Tshirt = ({a, handleAddToCart}) => {
    const {picture , name , price , gender , index} = a;
    return (
        <div className='t-shirt'>
           <img src={picture} alt="" />
           <h4>Name: {name}</h4>
           <p>Price: <del>{price+20}</del> <br />{price} </p>
           <button onClick={()=> handleAddToCart(a)}>Buy now</button>
        </div>
    );
};

export default Tshirt;