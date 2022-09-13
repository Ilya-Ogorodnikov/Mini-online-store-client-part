import {
  ForgotPasswordActionTypes,
  IForgotPasswordAction,
  IForgotPasswordState
} from '../../models/forgotPassword';

const initialState: IForgotPasswordState = {
  message: null,
  openSnackbar: false,
  loading: false
};

export const forgotPasswordReducer = (state = initialState, action: IForgotPasswordAction): IForgotPasswordState => {
  switch (action.type) {
    case ForgotPasswordActionTypes.SEND_MAIL:
      return { loading: action.payload, message: null, openSnackbar: false };
    case ForgotPasswordActionTypes.SEND_MAIL_SUCCESS:
      return { loading: false, message: action.payload, openSnackbar: true };
    default:
      return state;
  };
};