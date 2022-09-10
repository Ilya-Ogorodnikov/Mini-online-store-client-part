interface IFunState {
  loading: boolean
}

const initialState: IFunState = {
  loading: false
}

export enum FunActionTypes {
  CHANGE_LOADING = 'CHANGE_LOADING'
}

interface IChangeLoading {
  type: FunActionTypes.CHANGE_LOADING
  payload: boolean
}

export type IFunAction = IChangeLoading

export const funReducer = (state = initialState, action: IFunAction): IFunState => {
  switch (action.type) {
    case FunActionTypes.CHANGE_LOADING:
      return { loading: action.payload }
    default:
      return state
  };
};