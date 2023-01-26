import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import '@styles/MyOrder.scss';

import arrowIcon from "@icons/flechita.svg";

const MyOrder = () => {

	const { state, toggleOrder } = useContext(AppContext);

	const sumPriceTotal = () => {
		const reducer = (accumulater, currentValue) => accumulater + currentValue.price;
		const sum = state.cart.reduce(reducer,0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" onClick={()=> toggleOrder()} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((productItem, index) => (
					<OrderItem productItem={productItem} key={index} index={index} />
				))}
			</div>
			<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumPriceTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
		</aside>
	);
}

export default MyOrder;
