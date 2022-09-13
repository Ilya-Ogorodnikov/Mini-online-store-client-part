import {
  ErrorActionTypes,
  IErrorAction,
  IErrorState
} from '../../models/error';

const initialState: IErrorState = {
  error: null,
  openSnack: false
};

export const errorReducer = (state = initialState, action: IErrorAction): IErrorState => {
  switch (action.type) {
    case ErrorActionTypes.FETCH_ANY_ERROR:
      return { error: action.payload, openSnack: true };
    case ErrorActionTypes.CLEAR_ERROR:
      return { error: action.payload, openSnack: false };
    default:
      return state;
  };
};