export interface IErrorState {
  error: null | string,
  openSnack: boolean
};

export enum ErrorActionTypes {
  FETCH_ANY_ERROR = 'FETCH_ANY_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
};

interface IClearErrorAction {
  type: ErrorActionTypes.CLEAR_ERROR,
  payload: string
};

interface IAnyErrorAction {
  type: ErrorActionTypes.FETCH_ANY_ERROR,
  payload: string
};

export type IErrorAction = IClearErrorAction | IAnyErrorAction;