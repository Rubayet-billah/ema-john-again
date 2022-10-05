import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)

    let selectedItem = 0;
    let total = 0;
    let shipping = 0;
    let tax = 0;

    for (const item of cart) {
        selectedItem = selectedItem + item.quantity;
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
    }
    tax = tax + total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Cart container</h2>
            <p>Selected Item: {selectedItem}</p>
            <p>Total: {total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;