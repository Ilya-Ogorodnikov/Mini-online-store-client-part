import { Button } from '@mui/material';
import { FC } from 'react';
import { styles } from './style';

const ButtonCreateOrder: FC = () => (
  <Button sx={styles}>Оформить заказ</Button>
);

export default ButtonCreateOrder;