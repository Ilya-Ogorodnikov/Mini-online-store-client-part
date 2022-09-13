import { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { ITotalProductProps } from '../../models';
import { styles } from './style';

const InfoProducInOrder: FC<ITotalProductProps> = ({
  index,
  title,
  quantity,
  price
}) => (
  <Box sx={styles.infoProductWrapper}>
    <Box sx={styles.infoProductLeftSection}>
      <Typography
        variant="h5"
        component="p"
        sx={styles.infoProducText}
      >
        {`${index}. ${title}`}
      </Typography>
    </Box>

    <Box sx={styles.infoProductRightSection}>
      <Box>
        <Typography
          variant="h5"
          component="p"
          sx={styles.infoProducText}
        >
          {`${quantity} шт.`}
          </Typography>

          <Typography
            variant='body1'
            component='p'
            sx={styles.infoProductSum}
          >
            {`${price} ₽ /шт`}
          </Typography>
      </Box>

      <Box sx={styles.infoProductPriceBox}>
        <Typography
          variant="h5"
          component="span"
          sx={styles.infoProductPrice}
        >
          {price * quantity}
        </Typography>

        <Typography
          variant="h5"
          component="p"
          sx={styles.infoProducText}
        >
          руб.
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default InfoProducInOrder;