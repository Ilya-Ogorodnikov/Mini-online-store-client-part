import axios from 'axios';
import { Dispatch } from 'redux';
import { ISignUpFormValues } from '../../models';
import { AuthActionTypes, IAuthAction } from '../../models/auth';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { signUpNewUser } from '../../services/user-service';

export const signUp = ({ firstName, lastName, email, password, address, phoneNumber }: ISignUpFormValues) => async (dispatch: Dispatch<IAuthAction | IErrorAction>) => {
  try {
    dispatch({
      payload: true,
      type: AuthActionTypes.FETCH_AUTH
    });
    const response = await signUpNewUser({ firstName, lastName, email, password, address, phoneNumber });
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