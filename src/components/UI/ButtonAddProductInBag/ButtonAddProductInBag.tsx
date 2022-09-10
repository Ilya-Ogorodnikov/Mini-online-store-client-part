import { Button } from '@mui/material';
import { FC } from 'react';
import { useActions, useTypedSelector } from '../../../hooks';
import { IProduct } from '../../../models';
import { styles } from './style'

const ButtonAddProductInBag: FC<{ product: IProduct, width?: string }> = ({ product, width = 'auto' }) => {
  const { productsInBag } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth);
  const { addProductInBag } = useActions();

  return (
    <Button
      disabled={productsInBag.some(item => item._id === product?._id)}
      onClick={() => addProductInBag(product, isAuth)}
      sx={{...styles.cardButton, width}}
      variant="contained"
    >
      Добавить в корзину
    </Button>
  );
};

export default ButtonAddProductInBag;