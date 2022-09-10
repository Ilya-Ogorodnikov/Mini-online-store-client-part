export interface IForgotPasswordState {
  message: null | string,
  openSnackbar: boolean,
  loading: boolean
};

export enum ForgotPasswordActionTypes {
  SEND_MAIL = 'SEND_MAIL',
  SEND_MAIL_SUCCESS = 'SEND_MAIL_SUCCESS'
};

interface ISendMailAction {
  type: ForgotPasswordActionTypes.SEND_MAIL,
  payload: boolean
};

interface ISendMailSuccessAction {
  type: ForgotPasswordActionTypes.SEND_MAIL_SUCCESS,
  payload: string
};

export type IForgotPasswordAction = ISendMailAction | ISendMailSuccessAction;