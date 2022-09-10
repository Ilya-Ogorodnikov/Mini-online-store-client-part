import { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  LinearProgress,
  Typography
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import {
  MiniCardProduct,
  Footer,
  Header
} from '..';
import { api } from '../../api';
import { useTypedSelector } from '../../hooks';
import {
  getAllCategories,
  getNewProducts,
  getProductsOfSelectCategory
} from '../../services/product-service';
import { ICategories, IProduct } from '../../models';
import {settingsForSlider} from '../../constants';
import * as img from '../../assets';
import 'react-multi-carousel/lib/styles.css';
import { styles } from './style';

const StartPage: FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [sliderOfSelectCategory, setSliderOfSelectCategory] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getElementsOnStartPage();
  }, []);
  
  const getElementsOnStartPage = async () => {
    setIsLoading(true);
    const products = await getNewProducts();
    const allCategories = await getAllCategories();
    const productsOfSelectCategory = await getProductsOfSelectCategory(allCategories.data[0]._id);
    setNewProducts(products.data);
    setCategories(allCategories.data);
    setSliderOfSelectCategory(productsOfSelectCategory.data);
    setIsLoading(false);
  };

  const selectCategory = async (id: string) => {
    const productOfSelectCategory = await api.get(`client/start/products?categoryId=${id}`);
    setSliderOfSelectCategory(productOfSelectCategory.data);
  };

  if (isLoading) {
    return (
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={styles.mainBody}>
        <Header
          titleLink="Вход"
          pathLink="login"
        />

        <Box>
          <img
            style={{
              width: "100%",
              height: "450px",
              objectFit: "cover"
            }}
            src={img.banner}
            alt="banner"
          />
        </Box>

        <Typography
          variant="h2"
          component="h3"
          sx={styles.mainTitle}
        >
          Новинки
        </Typography>

        <Box sx={styles.mainBoxSlider}>
          <Carousel {...settingsForSlider}>
            {newProducts.map(el =>
              <MiniCardProduct
                key={el._id}
                product={el}
              />
            )}
          </Carousel>
        </Box>

        <Box sx={styles.mainCategorySlider}>
          <Carousel {...{...settingsForSlider, autoPlay: false}}>
            {categories.map(el =>
              <Button
                onClick={() => selectCategory(el._id)}
                variant="text"
                sx={styles.mainOneSlideCategory}
                key={el._id}
              >
                {el.title}
              </Button>
            )}
          </Carousel>
        </Box>

        <Box sx={styles.mainBoxSlider}>
          <Carousel {...settingsForSlider}>
            {sliderOfSelectCategory.map(el =>
              <MiniCardProduct
                key={el._id}
                product={el}
              />
            )}
          </Carousel>
        </Box>
      </Box>

      <Box sx={styles.mainFooter}>
        <Footer isAuth={isAuth} />
      </Box>
    </Box>
  );
};

export default StartPage;