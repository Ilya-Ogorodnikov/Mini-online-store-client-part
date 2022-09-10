import { FC } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Typography
} from '@mui/material';
import { Favorite, ShoppingBag } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTypedSelector, useActions } from '../../hooks';
import { IMiniCardProductProps } from '../../models';
import { styles } from './style';

const MiniCardProduct: FC<IMiniCardProductProps> = ({
  height='480px',
  width='auto',
  product
}) => {
  const { favoriteProducts, productsInBag } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth)
  const {
    addFavoriteProducts,
    addProductInBag,
    removeFavoriteProduct,
    removeProductFromBag,
  } = useActions();

  return (
    <Card sx={{...styles.cardWrapper, height, width}}>
      <Box sx={{flex: '1 0 auto'}}>
        <Link
          to={{pathname: `/product:${product._id}`}}
        >
          <CardMedia
            component="img"
            height="300"

            src={product.images[0]}
            sx={styles.cardMedia}
          />
        </Link>

        <Link
          to={`/${product._id}`}
          style={{textDecoration: 'none'}}
        >
          <Typography
            variant="h5"
            component="p"
            sx={styles.cardTitle}
          >
            {product.title}
          </Typography>
        </Link>
      </Box>

      <Box sx={{flex: '0 0 auto'}}>

        <Box sx={styles.cardFooter}>
          <Box sx={styles.cardPrice}>
            {`${product.price} руб.`}
          </Box>

          <Box sx={styles.cardIcons}>
            {favoriteProducts.some(item => item._id === product._id) ? (
              <Favorite
                onClick={() => removeFavoriteProduct(product, isAuth)}
                sx={styles.cardSelectIconFavorite}
              />
            ) : (
              <Favorite
                onClick={() => addFavoriteProducts(product, isAuth)}
                sx={styles.cardIcon}
              />
            )}

            {productsInBag.some(item => item._id === product._id) ? (
              <ShoppingBag
                onClick={() => removeProductFromBag(product, isAuth)}
                sx={styles.cardSelectIconShoppingBag}
              />
            ) : (
              <ShoppingBag
                onClick={() => addProductInBag(product, isAuth)}
                sx={styles.cardIcon}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MiniCardProduct;