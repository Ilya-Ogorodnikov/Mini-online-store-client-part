import { FC, useEffect } from 'react';
import {
  Typography,
  Box,
  LinearProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ButtonCreateOrder,
  ButtonDeleteAllProductInBag,
  CardProduct,
  Footer,
  Header
} from '..';
import {
  useActions,
  useCurrentTotalSum,
  useTypedSelector
} from '../../hooks';
import { styles } from './style';

const ShoppingBagPage: FC = () => {
  const { productsInBag, loading } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth);
  const { rewriteBagInLocalStorage } = useActions();
  const { totalSum } = useCurrentTotalSum();

  useEffect(() => {
    rewriteBagInLocalStorage(isAuth);
  }, []);

  if (loading) {
    return(
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  return (
    <Box sx={styles.shoppingBagWrapper}>
      <Box sx={styles.shoppingBagBody}>
        <Header
          pathLink="/login"
          titleLink="Вход"
        />

        <Box sx={styles.shoppingBagContainer}>
          <Box sx={styles.shoppingBagAppBar}>
            <Typography
              variant="h2"
              component="h2"
              sx={styles.shoppingBagTitle}
            >
              Корзина
            </Typography>

            <ButtonDeleteAllProductInBag />
          </Box>

          {productsInBag.length === 0 &&
            <Typography
              variant="h2"
              component="h2"
              sx={{...styles.shoppingBagTitle, textAlign: "center"}}
            >
              В корзине пусто
            </Typography>
          }

          {productsInBag.map(item =>
            <CardProduct
              key={item._id}
              isShoppingBagPage
              product={item}
            />
          )}

          {productsInBag.length !== 0 &&
            <Box sx={styles.shoppingBagCreateOrder}>
              <Box sx={styles.shoppingBagBoxPrice}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={styles.shoppingBagText}
                >
                  Итого:
                </Typography>

                <Typography
                  variant="h5"
                  component="p"
                  sx={styles.shoppingBagPrice}
                >
                  {totalSum}
                </Typography>

                <Typography
                  variant="h5"
                  component="p"
                  sx={styles.shoppingBagText}
                >
                  руб.
                </Typography>
              </Box>
              
              <Link
                to={{pathname: '/order'}}
                style={{textDecoration: 'none'}}
              >
                <ButtonCreateOrder />
              </Link>
            </Box>
          }
        </Box>
      </Box>

      <Box sx={styles.shoppingBagFooter}>
        <Footer isAuth={isAuth} />
      </Box>
    </Box>
  );
};

export default ShoppingBagPage;