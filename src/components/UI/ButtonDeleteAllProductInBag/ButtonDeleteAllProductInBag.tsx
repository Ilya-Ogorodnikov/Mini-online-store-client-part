import { Button } from '@mui/material';
import { FC } from 'react';
import { useActions, useTypedSelector } from '../../../hooks';
import { styles } from './style';

const ButtonDeleteAllProductInBag: FC = () => {
  const { removeAllProductsFromBag } = useActions();
  const { productsInBag } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth)

  return (
    <>
      {productsInBag.length !== 0 &&
        <Button
          onClick={() => removeAllProductsFromBag(isAuth)}
          sx={styles}
        >
          Очистить
        </Button>
      }
    </>
  );
};

export default ButtonDeleteAllProductInBag;