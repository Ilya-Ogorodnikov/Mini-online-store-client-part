import {
  AuthActionTypes,
  IAuthAction,
  IAuthState
} from '../../models/auth';

const initialState: IAuthState = {
  isAuth: false,
  loading: false
};

export const authReducer = (state = initialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_AUTH:
      return { isAuth: false, loading: action.payload };
    case AuthActionTypes.FETCH_AUTH_SUCCESS:
      return { isAuth: action.payload, loading: false };
    default:
      return state;
  };
};