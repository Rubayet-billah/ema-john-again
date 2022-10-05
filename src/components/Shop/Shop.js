import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { getArrayofIdFromDb, getFromDb, setToDb } from '../fakedb/fakedb';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // load products from json state
    const [products, setProducts] = useState([]);
    // load product by handler state
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // load data from database useEffect
    useEffect(() => {
        const storedCart = getFromDb('my-cart');
        let storedProduct = [];
        for (const id in storedCart) {
            const quantity = storedCart[id];
            // filter storeDb in all products and set quantity 
            for (const product of products) {
                if (product.id === id) {
                    product.quantity = quantity;
                    storedProduct.push(product);
                }
            }
        }
        setCart(storedProduct);
    }, [products])

    // click event handler function
    const productAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        // if the clicked product doesnt exist in the cart then add the quantity 1 to the new product and push it to the cart 
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        // if the clicked product exist in the cart then get all the rest products, update the quantity of the exist product and update the cart again
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        // set selectedProduct id to local storage
        setToDb(selectedProduct.id)
    }
    // console.log(products)
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        productAddToCart={productAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;