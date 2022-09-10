import axios from 'axios';
import { Dispatch } from 'redux';
import { api } from '../../api';
import { AuthActionTypes, IAuthAction } from '../../models/auth';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { getUserLocation, loginUser } from '../../services/user-service';

const signIn = (email: string, password: string, latitude: number, longitude: number, browser: string) => async (dispatch: Dispatch<IAuthAction | IErrorAction>) => {
  try {
    dispatch({
      payload: true,
      type: AuthActionTypes.FETCH_AUTH
    });

    const userLocation = await getUserLocation(latitude, longitude);
    const city = userLocation.data.results[0].formatted.split(',')[2];
    const country = userLocation.data.results[0].formatted.split(',')[4];
    const response = await loginUser(email, password, browser, city, country);
    localStorage.setItem('token', response.data.accessToken);

    dispatch({
      payload: true,
      type: AuthActionTypes.FETCH_AUTH_SUCCESS
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const { message }: any = error.response.data;
      if (typeof message === 'string') {
        dispatch({
          payload: false,
          type: AuthActionTypes.FETCH_AUTH
        });

        dispatch({
          payload: message,
          type: ErrorActionTypes.FETCH_ANY_ERROR
        });
      };
    };
  };
};

const authUser = () => async (dispatch: Dispatch<IAuthAction | IErrorAction>) => {
  try {
    if (localStorage.getItem('token')) {
      dispatch({
        payload: true,
        type: AuthActionTypes.FETCH_AUTH
      });

      const response = await axios.get('/users/refresh', { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);

      dispatch({
        payload: true,
        type: AuthActionTypes.FETCH_AUTH_SUCCESS
      });
    };
  } catch (error) {
    dispatch({
      payload: 'Ошибка авторизации',
      type: ErrorActionTypes.FETCH_ANY_ERROR
    });
  };
};

const logOut = () => async (dispatch: Dispatch<IAuthAction>) => {
  dispatch({
    payload: true,
    type: AuthActionTypes.FETCH_AUTH
  });

  await api.get('users/logout/');
  localStorage.removeItem('token');

  dispatch({
    payload: false,
    type: AuthActionTypes.FETCH_AUTH_SUCCESS
  });
};

export {
  signIn,
  authUser,
  logOut
};