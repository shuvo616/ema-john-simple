import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";

const Product = (props) => {
    console.log(props)
    // product destructuring
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p>Price: $ {price}</p>
                <p>Only {stock} left in stock - Order Soon.</p>
                <button className="buy-button" onClick={() => props.handelAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;