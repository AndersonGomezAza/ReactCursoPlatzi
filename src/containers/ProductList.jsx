import React, { useContext } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import '@styles/ProductInfo.scss';
import useGetProducts from '@hooks/useGetProduct';
import AppContext from '@context/AppContext';
import ProductInfo from '@components/ProductInfo';

const ApiProducts = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetProducts(ApiProducts);
	const {state} = useContext(AppContext);

	

	return (
		<>
			<section className="main-container">
				<div className="cards-container">
					{products.map(product => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			</section>
			{state.productInfoIsOpen && <ProductInfo products={products} />}
		</>
	);
}

export default ProductList;
