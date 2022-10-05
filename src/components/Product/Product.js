import React from 'react';
import './Product.css'
const Product = ({ product, productAddToCart }) => {
    const { name, img, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h3>Price: ${price}</h3>
                <p>Seller: {seller}</p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => productAddToCart(product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;