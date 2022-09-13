import { Dispatch } from 'redux';
import { IEmail } from '../../models';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { ForgotPasswordActionTypes, IForgotPasswordAction } from '../../models/forgotPassword';
import { sendResetPasswordMail } from '../../services/user-service';

export const sendMail = (data: IEmail) => async (dispatch: Dispatch<IForgotPasswordAction | IErrorAction>) => {
  try {
    dispatch({
      payload: true,
      type: ForgotPasswordActionTypes.SEND_MAIL
    });

    const response = await sendResetPasswordMail(data);
    console.log(response);
    

    if (response.data.message) {
      dispatch({
        type: ErrorActionTypes.FETCH_ANY_ERROR,
        payload: response.data.message
      });
    };
  } catch (error) {
    console.log(error);
    
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Такого пользователя не существует'
    });
  };
};