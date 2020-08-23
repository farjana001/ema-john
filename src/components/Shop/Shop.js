import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';


const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen); 
         // making state of cart
         const [cart, setCart] = useState([]);

    const handleProduct = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
    }
    


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Products handleProduct={handleProduct} product={pd}></Products>)
                }
            </div>
            <div className="cart-container">
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Shop;