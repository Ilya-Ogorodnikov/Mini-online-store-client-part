import * as AuthActionCreators from '../action-creators/auth';
import * as ErrorActionCreators from '../action-creators/error';
import * as SignUpActionCreators from '../action-creators/sign-up';
import * as ForgotPasswordActionCreators from '../action-creators/forgotPassword';
import * as ResetPasswordActionCreators from '../action-creators/resetPassword';
import * as ProductActionCreators from '../action-creators/product';
import * as CatalogActionCreators from '../action-creators/catalog';

export default {
  ...AuthActionCreators,
  ...ErrorActionCreators,
  ...SignUpActionCreators,
  ...ForgotPasswordActionCreators,
  ...ResetPasswordActionCreators,
  ...ProductActionCreators,
  ...CatalogActionCreators
};