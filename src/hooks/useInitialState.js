import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload)
        ? state.cart
        : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  const toggleMenuMobile = () => {
    setState({
      ...state,
      menuMobileIsOpen: !state.menuMobileIsOpen,
    });
  };

  const toggleProductInfo = (stateProductInfo, productId) => {
    setState({
      ...state,
      productInfoIsOpen: stateProductInfo,
      productInfoId: productId,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrder,
    toggleMenu,
    toggleMenuMobile,
    toggleProductInfo,
  };
}

export default useInitialState;