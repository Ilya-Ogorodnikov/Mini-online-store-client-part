import { AddCircle } from '@mui/icons-material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useActions, useTypedSelector } from '../../../hooks';
import { IButtonAddAmountProductInBagProps } from '../../../models';
import { ErrorActionTypes } from '../../../models/error';
import { styles } from './style';

const ButtonAddAmountProductInBag: FC<IButtonAddAmountProductInBagProps> = ({ id, productQuantity }) => {
  const { changeQauntityProduct } = useActions();
  const { quantityProductInBag } = useTypedSelector(state => state.product);
  const { loading } = useTypedSelector(state => state.fun)
  const { isAuth } = useTypedSelector(state => state.auth)
  const dispatch = useDispatch();

  const addHandler = () => {
    if (quantityProductInBag.find(item => item._id === id)?.quantity === productQuantity) {
      dispatch({
        type: ErrorActionTypes.FETCH_ANY_ERROR,
        payload: 'Превышено максимальное число товара'
      });
      return;
    };

    changeQauntityProduct(id, true, isAuth);
  };

  return loading ? (
    <AddCircle
      sx={styles.inactiveButton}
    />
  ) : (
    <AddCircle
      onClick={addHandler}
      sx={styles.activeButton}
    />
  )
};

export default ButtonAddAmountProductInBag;