import React, {useContext} from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';

import OrderCloseImg from "@icons/icon_close.png"; 

const OrderItem = ({ productItem, index }) => {

	const {removeFromCart} = useContext(AppContext);
	
	const handleRemove = product => {
		removeFromCart(product, index);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={productItem.images[0]} alt={productItem.title} />
			</figure>
			<p>{productItem.title}</p>
			<p>${productItem.price}</p>
			<img src={OrderCloseImg} alt="close" onClick={()=> handleRemove(productItem)} />
		</div>
	);
}

export default OrderItem;
