import { useEffect, useState } from 'react';
import { useTypedSelector } from './';

export const useCurrentTotalSum = () => {
  const { productsInBag, quantityProductInBag } = useTypedSelector(state => state.product);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    setTotalSum(productsInBag.reduce((sum, product) => {
      const currentProduct = quantityProductInBag.find(item => item._id === product._id);
      return sum += product.price * currentProduct?.quantity!;
    }, 0));
  }, [quantityProductInBag, productsInBag]);

  return { totalSum };
};