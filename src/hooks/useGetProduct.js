import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (APIUrl) => {
	const [products, setProducts] = useState([]);

	useEffect(async()=> {
		const response = await axios(APIUrl);
		setProducts(response.data);
	}, []);

  return products;
}

export default useGetProducts;