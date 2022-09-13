export interface IResetPasswordState {
  isValidToken: boolean,
  message: null | string,
  currentUserId: null | string
};

export enum ResetPasswordActionTypes {
  FETCH_VALID_TOKEN_AND_USER_ID = 'FETCH_VALID_TOKEN_AND_USER_ID',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD'
};

interface IFetchValidTokenAndUserId {
  type: ResetPasswordActionTypes.FETCH_VALID_TOKEN_AND_USER_ID,
  payload: string
};

interface IChangePassword {
  type: ResetPasswordActionTypes.CHANGE_PASSWORD,
  payload: string
};

export type IResetPasswordAction = IFetchValidTokenAndUserId | IChangePassword;