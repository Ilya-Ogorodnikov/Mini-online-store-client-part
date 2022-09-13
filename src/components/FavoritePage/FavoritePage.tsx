import { FC, useEffect } from 'react';
import {
  Box,
  LinearProgress,
  Typography
} from '@mui/material';
import {
  CardProduct,
  Footer,
  Header
} from '..';
import { useActions, useTypedSelector } from '../../hooks';
import { styles } from './style';

const FavoritePage: FC = () => {
  const { favoriteProducts, loading } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth);
  const { rewriteFavoriteProductsInLocalStorage } = useActions();

  useEffect(() => {
    rewriteFavoriteProductsInLocalStorage(isAuth)
  }, []);

  if (loading) {
    return(
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  return (
    <Box sx={styles.favoriteWrapper}>
      <Box sx={styles.favoriteBody}>
        <Header
          pathLink="/login"
          titleLink="Вход"
        />

        <Box sx={styles.favoriteContainer}>
          <Typography
            variant="h2"
            component="h2"
            sx={styles.favoriteTitle}
          >
            Избранное
          </Typography>

          {favoriteProducts.length === 0 &&
            <Typography
            variant="h2"
            component="h2"
            sx={{...styles.favoriteTitle, textAlign: "center"}}
          >
            В избранном пусто
          </Typography>
          }

          {favoriteProducts.map(item =>
            <CardProduct
              key={item._id}
              isFavoritePage
              product={item}
            />
          )}
        </Box>
      </Box>

      <Box sx={styles.favoriteFooter}>
        <Footer isAuth={isAuth} />
      </Box>
    </Box>
  );
};

export default FavoritePage;