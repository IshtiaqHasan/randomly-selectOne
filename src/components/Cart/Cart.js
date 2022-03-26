import React from 'react';
import './Cart.css'

const Cart = ({ product }) => {

    const { img, name } = product;

    return (
        <div className='cart'>
            {<h4>
                <img width='10%' src={img} alt="" /> {name}
            </h4>
            }
        </div>
    );
};

export default Cart;