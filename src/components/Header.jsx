import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import MenuComponent from '@components/Menu';
import MenuMobileComponent from '@components/MenuMobile';
import MyOrderContainer from '../containers/MyOrder';
import menuIcon from '@icons/icon_menu.svg';
import logoIcon from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';

const Header = () => {

	const { state, toggleOrder, toggleMenu, toggleMenuMobile } = useContext(AppContext);

	return (
		<nav>
			<img src={menuIcon} alt="menu" className="menu" onClick={ () => toggleMenuMobile() } />
			<div className="navbar-left">
				<img src={logoIcon} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={()=>toggleMenu()}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={() => toggleOrder()}>
						<img src={shoppingCartIcon} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{state.menuIsOpen && <MenuComponent />}
			{state.orderIsOpen && <MyOrderContainer />} 
			{state.menuMobileIsOpen && <MenuMobileComponent />}
		</nav>
	);
}

export default Header;