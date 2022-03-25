import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Headphones.css'

const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeadphones(data))
    }, [])
    return (
        <div className='headphones-container'>
            <div className="products-container">
                {
                    headphones.map(headphone => <Product
                        key={headphone.id}
                        headphone={headphone}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected TWS</h2>
            </div>
        </div>

    );
};

export default Headphones;