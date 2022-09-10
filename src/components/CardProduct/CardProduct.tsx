import { FC, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  ButtonAddAmountProductInBag,
  ButtonAddProductInBag,
  ButtonDecreaseAmountProductInBag,
  ButtonProductDetailed
} from '..';
import { useActions, useTypedSelector } from '../../hooks';
import { ICardProductProps } from '../../models';
import { styles } from './style';

const CardProduct: FC<ICardProductProps> = ({
  product,
  isFavoritePage = false,
  isShoppingBagPage = false
}) => {
  const { quantityProductInBag } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth);
  const { removeFavoriteProduct, removeProductFromBag } = useActions();
  const quantityProduct = quantityProductInBag.find(item => item._id === product._id)?.quantity;

  const handleDelete = () => {
    if (isFavoritePage) {
      removeFavoriteProduct(product, isAuth);
    };

    if (isShoppingBagPage) {
      removeProductFromBag(product, isAuth);
    };
  };

  return (
    <Card sx={styles.cardWrapper}>
      <CardActionArea sx={styles.cardActionArea}>
        <Link
          to={{pathname: `/product:${product._id}`}}
        >
          <CardMedia
            component="img"
            src={product.images[0]}
            sx={styles.cardMedia}
          />
        </Link>
      </CardActionArea>

      <CardContent sx={styles.cardContent}>
        <Link
          to={{pathname: `/${product._id}`}}
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

        {isFavoritePage && (
          <>
            <Box sx={styles.cardBoxPrice}>
              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPriceText}
              >
                Цена:
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPrice}
              >
                {product.price}
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPriceText}
              >
                руб.
              </Typography>
            </Box>

            <Box sx={styles.cardFooter}>
              <Box sx={styles.cardButtonsFavoritePage}>
                <ButtonProductDetailed id={product._id} />

                <ButtonAddProductInBag product={product} />
              </Box>
            </Box>
          </>
        )}

        {isShoppingBagPage && (
          <Box sx={styles.cardShoppingBag}>
            <Box sx={styles.cardFooter}>
              <Box sx={styles.cardButtons}>
                <Box sx={styles.cardActions}>
                  <ButtonDecreaseAmountProductInBag id={product._id} />

                  <Typography
                    variant="h5"
                    component="p"
                    sx={styles.cardAmountProduct}
                  >
                    {quantityProduct}
                  </Typography>

                  <ButtonAddAmountProductInBag
                    id={product._id}
                    productQuantity={product.quantity}
                    />
                </Box>

                <Typography
                  variant='body1'
                  component='p'
                >
                  {`${product.price} ₽ /шт`}
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.cardBoxPrice}>
              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPriceText}
              >
                Цена:
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPrice}
              >
                {product.price * quantityProduct!}
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={styles.cardPriceText}
              >
                руб.
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>

      <Delete
        onClick={handleDelete}
        sx={styles.cardRemove}
      />
    </Card>
  );
};

export default CardProduct;