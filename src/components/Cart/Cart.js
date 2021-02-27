import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // Total price count using "reduce" method
    // const total = cart.reduce((total,prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    // shipping
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    } else if(total > 15){
        shipping = 4.99;
    } else if(total > 0){
        shipping = 12.99;
    }
    // tax
    const tax = (total / 10).toFixed(2);
    // grant total
     const grantTotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {grantTotal}</p>    
        </div>
    );
};

export default Cart;