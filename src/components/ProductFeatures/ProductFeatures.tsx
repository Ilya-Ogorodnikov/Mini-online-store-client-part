import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { styles } from './style';

const ProductFeatures:FC<{ name: string, description: string }> = ({ name, description }) => (
  <Box sx={styles.productFeaturesBox}>
    <Box sx={styles.productFeaturesHeader}>
      <Box sx={styles.productFeaturesDecorElement} />

      <Typography sx={styles.productFeaturesName}>{name}</Typography>
    </Box>

    <Typography sx={styles.productFeaturesDescription}>{description}</Typography>
  </Box>
);

export default ProductFeatures;