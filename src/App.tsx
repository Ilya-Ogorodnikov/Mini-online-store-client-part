import {
  FC,
  useEffect,
  useState
} from 'react';
import {
  CssBaseline,
  LinearProgress,
  ThemeProvider
} from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import {
  SignUp,
  StartPage,
  SignIn,
  ForgotPassword,
  ResetPassword,
  LayoutSnackbar,
  ProductPage,
  FavoritePage,
  ShoppingBag,
  NotFoundPage,
  CreateOrderPage,
} from './components';
import { useActions, useTypedSelector } from './hooks';
import { theme } from './themes/rootTheme';
import Charts from './components/Chart/Charts';

const App: FC = () => {
  const { authUser } = useActions();
  const { loading } = useTypedSelector(state => state.auth);
  const [loadingRender, setLoadingRender] = useState(true);

  useEffect(() => {
    authUser();
    setLoadingRender(false);
  }, []);

  if (loading || loadingRender) {
    return (
      <LinearProgress sx={{ marginTop: "50vh" }} />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <LayoutSnackbar />
          <Routes>
            <Route path="/">
              <Route index element={<StartPage />} />
              <Route path="login" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="reset-password/:token" element={<ResetPassword />} />
              <Route path="product:id" element={<ProductPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="shopping-bag" element={<ShoppingBag />} />
              <Route path="order" element={<CreateOrderPage />} />
              <Route path="chart" element={<Charts />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
};
export default App;
