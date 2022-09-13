import {
  FC,
  useEffect,
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  LinearProgress
} from '@mui/material';
import {
  ButtonAddAmountProductInBag,
  ButtonAddProductInBag,
  ButtonDecreaseAmountProductInBag,
  CardImage,
  Footer,
  Header,
  ProductFeatures
} from '..';
import { Favorite } from '@mui/icons-material';
import { getOneProduct } from '../../services/product-service';
import { IProduct, IQuantityProduct } from '../../models';
import { useActions, useTypedSelector } from '../../hooks';
import { styles } from './style';

const ProductPage: FC = () => {
  const params = useParams();
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [currentQuantity, setCurrentQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false);
  const { favoriteProducts, productsInBag } = useTypedSelector(state => state.product);
  const { isAuth } = useTypedSelector(state => state.auth);
  const {
    addFavoriteProducts,
    removeFavoriteProduct,
  } = useActions();

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const productsQuantity: IQuantityProduct[] = JSON.parse(localStorage.getItem('quantityProducts')!) || [];
    setCurrentQuantity(productsQuantity.find(item => item._id === currentProduct?._id)?.quantity || currentQuantity);
  }, [JSON.parse(localStorage.getItem('quantityProducts')!)]);

  const getProduct = async () => {
    setIsLoading(true);
    const product = await getOneProduct(params.id?.slice(1, params.id.length)!);
    setCurrentProduct(product.data[0]);
    setIsLoading(false)
  };

  if (isLoading) {
    return(
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  return (
    <>
      <Box sx={styles.pageProductWrapper}>
        <Box sx={styles.pageProductBody}>
          <Header
            pathLink="/login"
            titleLink= "Вход"
          />

          <Box sx={styles.pageProductContentBox}>
            <Typography sx={styles.pageProductTitle}>{currentProduct?.title}</Typography>

            <Box sx={styles.pageProductImagesBox}>
              {currentProduct?.images.map((srcImg, index) =>
                <CardImage
                  key={index}
                  src={srcImg}
                />
              )}
            </Box>

            <Box sx={styles.pageProductActions}>
              <Typography sx={styles.pageProductPrice}>
                {`${currentProduct?.price} руб.`}
              </Typography>

              <Box sx={styles.pageProductButtonsGroup}>
                {favoriteProducts.some(item => item._id === currentProduct?._id) ? (
                  <Favorite
                    onClick={() => removeFavoriteProduct(currentProduct!, isAuth)}
                    sx={styles.pageProductSelectIcon}
                  />
                ) : (
                  <Favorite
                    onClick={() => addFavoriteProducts(currentProduct!, isAuth)}
                    sx={styles.pageProductIcon}
                  />
                )}

                {
                  productsInBag.some(item => item._id === currentProduct?._id) ? (
                    <Box sx={styles.pageProductCounterBox}>
                      <ButtonDecreaseAmountProductInBag id={currentProduct?._id!} />

                      <Typography
                        variant="h5"
                        component="p"
                      >
                        {currentQuantity}
                      </Typography>

                      <ButtonAddAmountProductInBag
                        id={currentProduct?._id!}
                        productQuantity={currentProduct?.quantity!}
                      />
      
                    </Box>
                  ) : (
                    <ButtonAddProductInBag
                      width="250px"
                      product={currentProduct!}
                    />
                  )}
              </Box>
            </Box>

            <Typography sx={styles.pageProductDescription}>
              {currentProduct?.description}
            </Typography>

            <Box sx={styles.pageProductFeaturesBox}>
              {currentProduct?.features?.map(item =>
                <ProductFeatures
                  key={item._id}
                  name={item.name}
                  description={item.description}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.pageProductFooter}>
        <Footer isAuth={isAuth} />
      </Box>
    </>
  );
};

export default ProductPage;