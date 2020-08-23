import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
           <div>
                <img src={img} alt=""/>
           </div>
           <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock - Order soon</p>
                <button onClick={() => props.handleProduct(props.product)} className='main-btn'><FontAwesomeIcon icon={faShoppingCart} />

 add to cart</button>
            </div>
           </div>
 
    );
};

export default Products;