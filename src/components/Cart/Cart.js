import React from 'react';

const Cart = (props) => {

    const { cart } = props;
    const quantity = cart.reduce((previous, product) => previous +
        (product.quantity || 1), 0)
    const totalReducer = (previous, product) => previous + product.price * (product.quantity || 1);
    const total = cart.reduce(totalReducer, 0);
    const tax = total * .2;
    let shipping = 0;
    let grandTotal = 0;
    if (total) {
        shipping = 20;
        grandTotal = total + shipping + tax;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h3>Item Ordered: {quantity}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
            <h3>Shipping: ${shipping}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>GrandTotal: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;