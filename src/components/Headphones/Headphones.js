import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Headphones.css'

const Headphones = () => {
    const [headphones, setHeadphones] = useState([]);
    const [item, setItem] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHeadphones(data))
    }, []);

    const handleAddToCart = (headphone) => {

        if (item.length < 4) {
            const newItem = [...item, headphone];
            setItem(newItem);
        }
    }

    const handlePick = () => {
        const newItem = [...item];
        const randomItem = newItem[Math.floor(Math.random() * newItem.length)];
        alert('Best TWS For You is:  ' + randomItem.name)

    }


    const handleReset = () => {
        const newItem = [];
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
                    item.map((product) =>
                        <Cart
                            key={product.id}
                            product={product}

                        >
                        </Cart>
                    )
                }


                <div className='pick-reset-btn'>
                    <button onClick={() => handlePick()} className='pick-btn'>Pick Best</button>
                    <button onClick={handleReset} className='reset-btn'>Reset</button>
                </div>
            </div>
        </div>

    );
};

export default Headphones;