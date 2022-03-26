import React from 'react';
import './Cart.css'

const Cart = ({ product }) => {
    console.log(product);
    const { img, name } = product;
    return (
        <div className='cart'>
            {<p>
                <img width='10%' src={img} alt="" /> {product.name}
            </p>
            }
        </div>
    );
};

export default Cart;