import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css'

const Products = ({ product, handleAddToCart }) => {

    // console.log(props.product)
    // const {product, handleAddToCart} = props
    const { id, img, name, price, ratings, stock, seller } = product


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="prodct-info">
                <p className='product-name'>{name}</p>

                <p><small>Price: $ {price}</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;