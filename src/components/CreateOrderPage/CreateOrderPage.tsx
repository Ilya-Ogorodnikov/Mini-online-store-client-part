import {
  FC,
  useEffect,
  useState
} from 'react';
import {
  Box,
  Button,
  LinearProgress,
  Typography
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ButtonSelectPickupPoint,
  Footer,
  Header,
  InfoProducInOrder,
  ModalWindow,
  PickupPointsMap
} from '..';
import {
  useActions,
  useCurrentTotalSum,
  useTypedSelector
} from '../../hooks';
import { createOrder } from '../../services/product-service';
import { ErrorActionTypes } from '../../models/error';
import { IPickupPoint } from '../../models';
import { styles } from './style';

const CreateOrderPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectPickupPoint, setSelectPickupPoint] = useState('');
  const [successfulPurchase, setSuccessfulPurchase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useTypedSelector(state => state.auth);
  const {
    productsInBag,
    quantityProductInBag,
    loading
  } = useTypedSelector(state => state.product);
  const { totalSum } = useCurrentTotalSum();
  const { rewriteBagInLocalStorage, removeAllProductsFromBag } = useActions();

  useEffect(() => {
    rewriteBagInLocalStorage(isAuth);
    const pickupPoint: IPickupPoint = JSON.parse(localStorage.getItem('pickupPoint')!) || '';
    pickupPoint ? setSelectPickupPoint(pickupPoint.title) : setSelectPickupPoint('');
  }, []);

  useEffect(() => {
    if (productsInBag.length === 0) {
      return navigate('/');
    };
  }, []);

  if (loading) {
    return(
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  const createOrderHandler = async () => {
    try {
      if (isAuth) {
        if (selectPickupPoint) {
          setIsLoading(true)
          const idPickupPoint = JSON.parse(localStorage.getItem('pickupPoint')!)._id;
          await createOrder(totalSum, quantityProductInBag, idPickupPoint);
          removeAllProductsFromBag(isAuth);
          localStorage.removeItem('pickupPoint');
          setIsLoading(false);
          setSuccessfulPurchase(true);
          return;
        };

        dispatch({
          type: ErrorActionTypes.FETCH_ANY_ERROR,
          payload: 'Выберите пункт выдачи'
        });
        return;
      };
      return navigate('/login');
    } catch (error) {
      dispatch({
        type: ErrorActionTypes.FETCH_ANY_ERROR,
        payload: 'Ошибка в оформлении заказа'
      });
    };
  };

  return (
    <>
      <Box sx={styles.createOrderWrapper}>
        <Box sx={styles.createOrderBody}>
          <Header
            pathLink="/login"
            titleLink="Вход"
          />

          {
            successfulPurchase ? (
              <Box sx={styles.createOrderSuccessBox}>
                <Typography sx={styles.createOrderSuccessTitle}>
                  Спасибо за совершенный заказ
                </Typography>
                <Link
                  to='/'
                  style={{textDecoration: 'none'}}
                >
                  <Button sx={styles.createOrderRedirectButton}>
                    Вернуться на главную страницу
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box sx={styles.createOrderRelativeBoxContent}>
                <Box sx={styles.createOrderBoxContent}>
                  <Typography
                    variant="h5"
                    component="p"
                    sx={styles.createOrderTitle}
                  >
                    Ваши товары:
                  </Typography>
      
                  {
                    productsInBag.map((item, index) =>
                      <InfoProducInOrder
                        key={item._id}
                        index={index + 1}
                        title={item.title}
                        price={item.price}
                        quantity={quantityProductInBag.find(product => product._id === item._id)?.quantity!}
                      />
                    )
                  }

                  <Box sx={styles.createOrderInfo}>
                    <Box
                      onClick={() => setIsOpenModal((prev) => !prev)}
                      sx={styles.createOrderBoxSelectButton}
                    >
                      <ButtonSelectPickupPoint />

                      {selectPickupPoint &&
                        <Typography
                          variant="h5"
                          component="p"
                          sx={styles.createOrderPickupPoint}
                        >
                          Пункт выдачи: {selectPickupPoint}
                        </Typography>
                      }
                    </Box>

                    <Box sx={styles.createOrderPriceBox}>
                      <Typography
                        variant="h5"
                        component="p"
                        sx={styles.createOrderPriceText}
                      >
                        Итого:
                      </Typography>
      
                      <Typography
                        variant="h5"
                        component="span"
                        sx={styles.createOrderTotalSum}
                      >
                        {totalSum}
                      </Typography>
      
                      <Typography
                        variant="h5"
                        component="p"
                        sx={styles.createOrderPriceText}
                      >
                        руб.
                      </Typography>
                    </Box>
                  </Box>
      
                  <Box sx={styles.createOrderButtonBox}>
                    {
                      isLoading ? (
                        <Button
                          disabled={true}
                          sx={styles.createOrderInActiveButton}
                        >
                          Оформить заказ
                        </Button>
                      ) : (
                        <Button
                          onClick={createOrderHandler}
                          sx={styles.createOrderActiveButton}
                        >
                          Оформить заказ
                        </Button>
                      )
                    }
                  </Box>
                </Box>
              </Box>
            )
          }
        </Box>
  
        <Box sx={styles.createOrderFooter}>
          <Footer isAuth={isAuth}/>
        </Box>
  
      </Box>

      {isOpenModal &&
        <ModalWindow
          open={isOpenModal}
          close={setIsOpenModal}
          modalTitle="Выберите пункт выдачи заказа"
        >
          <PickupPointsMap
            setOpenModal={setIsOpenModal}
            changePickupPoint={setSelectPickupPoint}
          />
        </ModalWindow>
      }
    </>
  );
};

export default CreateOrderPage;