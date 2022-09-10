import {
  IResetPasswordAction,
  IResetPasswordState,
  ResetPasswordActionTypes
} from '../../models/resetPassword';

const initialState: IResetPasswordState = {
  isValidToken: false,
  message: null,
  currentUserId: null
};

export const resetPasswordReducer = (state = initialState, action: IResetPasswordAction): IResetPasswordState => {
  switch (action.type) {
    case ResetPasswordActionTypes.FETCH_VALID_TOKEN_AND_USER_ID:
      return { isValidToken: true, message: null, currentUserId: action.payload };
    case ResetPasswordActionTypes.CHANGE_PASSWORD:
      return { isValidToken: true, message: action.payload, currentUserId: null };
    default:
      return state;
  };
};