import { Dispatch } from 'redux';
import { ErrorActionTypes, IErrorAction } from '../../models/error';
import { IResetPasswordAction, ResetPasswordActionTypes } from '../../models/resetPassword';
import { changePassword, validateUser } from '../../services/user-service';

const validUser = (token: string) => async (dispatch: Dispatch<IResetPasswordAction | IErrorAction>) => {
  try {
    const response = await validateUser(token);

    dispatch({
      type: ResetPasswordActionTypes.FETCH_VALID_TOKEN_AND_USER_ID,
      payload: response.data.userId
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Ошибка при получении данных'
    });
  };
};

const newPassword = (userId: string, password: string) => async (dispatch: Dispatch<IResetPasswordAction | IErrorAction>) => {
  try {
    console.log(userId, password);
    await changePassword(userId, password);
    

    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Пароль успешно изменен. Войдите в аккаунт'
    });
  } catch (error) {
    dispatch({
      type: ErrorActionTypes.FETCH_ANY_ERROR,
      payload: 'Ошибка при смене пароля'
    });
  };
};

export {
  validUser,
  newPassword
};