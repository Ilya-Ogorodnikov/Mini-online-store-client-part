import { IProduct } from ".";

export interface ICatalog {
  products: IProduct[],
  isLoading: boolean
}

export enum CatalogActionTypes {
  FETCHING_CATALOG = 'FETCHING_CATALOG',
  FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS'
};

interface IFetchCatalogAction {
  type: CatalogActionTypes.FETCHING_CATALOG,
  payload: IProduct[]
};

interface IFetchCatalogSuccessAction {
  type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
  payload: IProduct[]
};

export type ICatalogAction = IFetchCatalogAction | IFetchCatalogSuccessAction;