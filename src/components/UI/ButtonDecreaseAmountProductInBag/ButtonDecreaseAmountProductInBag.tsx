import { FC } from 'react';
import { RemoveCircle } from '@mui/icons-material';
import { useActions, useTypedSelector } from '../../../hooks';
import { styles } from './style';

const ButtonDecreaseAmountProductInBag: FC<{ id: string }> = ({ id }) => {
  const { changeQauntityProduct } = useActions();
  const { quantityProductInBag } = useTypedSelector(state => state.product);
  const { loading } = useTypedSelector(state => state.fun)
  const { isAuth } = useTypedSelector(state => state.auth);

  const decreaseHandler = () => {
    if (quantityProductInBag.find(item => item._id === id)?.quantity === 1) {
      return;
    };

    changeQauntityProduct(id, false, isAuth);
  };

  return (
    <>
      {loading ? (
        <RemoveCircle
          sx={styles.inActiveButton}
        />
      ) : (
        <RemoveCircle
          onClick={decreaseHandler}
          sx={styles.activeButton}
        />
      )}
    </>
  );
};

export default ButtonDecreaseAmountProductInBag;