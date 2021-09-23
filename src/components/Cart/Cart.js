import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    const tax = total * .2;
    let shipping = 20;
    let grandTotal = 0;
    if (total) {
        grandTotal = total + shipping + tax;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h3>Item Ordered: {props.cart.length}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
            <h3>Shipping: ${shipping}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>GrandTotal: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;