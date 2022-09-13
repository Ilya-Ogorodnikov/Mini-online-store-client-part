import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';
import { forgotPasswordReducer } from './forgotPasswordReducer';
import { productReducer } from './productReducer';
import { resetPasswordReducer } from './resetPasswordReducer';
import { catalogReducer } from './catalog';
import { funReducer } from './funReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  product: productReducer,
  catalog: catalogReducer,
  fun: funReducer
});

export type RootState = ReturnType<typeof rootReducer>;