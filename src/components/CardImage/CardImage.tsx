import { FC } from 'react';
import { Card, CardMedia } from '@mui/material';
import { styles } from './style';

const CardImage: FC<{ src: string }> = ({ src }) => (
  <Card sx={styles}>
    <CardMedia
      component="img"
      height="300"
      width="225"
      src={src}
    />
  </Card>
);

export default CardImage;