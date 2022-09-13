import { Button } from '@mui/material';
import { FC } from 'react';
import { styles } from './style';

const ButtonSelectPickupPoint: FC = () => (
  <Button sx={styles}>
    Выбрать пункт выдачи
  </Button>
);

export default ButtonSelectPickupPoint;