import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Headphones.css'

const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);
    const [item, setItem] = useState([]);
    //console.log(item)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeadphones(data))
    }, []);

    const handleAddToCart = (headphone) => {
        const newItem = [...item, headphone];
        setItem(newItem);
    }

    return (
        <div className='headphones-container'>
            <div className="products-container">
                {
                    headphones.map(headphone => <Product
                        key={headphone.id}
                        headphone={headphone}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Suitable TWS For You</h2>
                {
                    item.map(product =>
                        <Cart

                            key={product.id}
                            product={product}
                        >
                        </Cart>
                    )
                }

            </div>
        </div>

    );
};

export default Headphones;