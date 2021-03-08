import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product.key)
    // product destructuring
    const {img,name,seller,price,stock,key} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by {seller}</small></p>
                <p>Price: $ {price}</p>
                <p>Only {stock} left in stock - Order Soon.</p>
                { props.showAddToCart === true && <button className="buy-button" onClick={() => props.handelAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                </button>}
            </div>
        </div>
    );
};

export default Product;