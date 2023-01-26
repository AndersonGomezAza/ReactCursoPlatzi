import React, { useContext } from 'react';
import '@styles/ProductInfo.scss';
import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import closeIcon from "@icons/icon_close.png";

const ProductInfo = ({products}) => {

	const { toggleProductInfo, state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	}

	let indice = products.findIndex(product => product.id === state.productInfoId);

	return (
		<aside className="product-detail">
			<div className="product-detail-close" onClick={()=> toggleProductInfo(false)} >
				<img src={closeIcon} alt='closeIcon'/>
			</div>
			<img src={products[indice].images[0]} alt="product" className="product-img" />
			<div className="product-info">
				<p>${products[indice].price}</p>
				<p>{products[indice].title}</p>
				<p>{products[indice].description}</p>
				<button className="button-detail" onClick={()=>handleClick(products[indice])}>
				{  
					state.cart.includes(products[indice]) 
						? <img className="disabled add-to-cart-btn" src={addedToCartImage} alt="added to cart" />
						: <img className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart" /> 
				}
				</button>
			</div>
		</aside>

	);
}

export default ProductInfo;
