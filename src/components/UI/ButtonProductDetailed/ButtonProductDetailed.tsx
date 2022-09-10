import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { styles } from './style';

const ButtonProductDetailed: FC<{ id: string }> = ({ id }) => (
  <Link
    to={{pathname: `/product:${id}`}}
    style={{textDecoration: "none"}}
  >
    <Button
      sx={styles.cardButton}
      variant="contained"
    >
      Подробнее
    </Button>
  </Link>
);

export default ButtonProductDetailed;