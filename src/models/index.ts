export interface ISignUpFormValues {
  firstName: string,
  lastName: string,
  email: string
  password: string,
  confirmPassword?: string,
  address: string,
  phoneNumber: string,
  checkbox?: boolean
}

export interface ILoginFormValues {
  email: string,
  password: string
}

export interface IHeaderProps {
  titleLink: string,
  pathLink: string
}

export interface IEmail {
  email: string
}

export interface IResetPassword {
  password: string,
  repeatPassword: string
}

export interface IFooterProps {
  isAuth: boolean
}

export interface IFeaturesProducts {
  name: string,
  description: string,
  _id: string
}

export interface IProduct {
  _id: string
  images: string[],
  title: string,
  price: number,
  quantity: number
  description?: string,
  features?: IFeaturesProducts[],
  category?: string,
  createdAt?: string,
  isDelete?: boolean,
}

export interface IMiniCardProductProps {
  product: IProduct,
  height?: string,
  width?: string
}

export interface IModalProps {
  open: boolean,
  close: (data: boolean) => void,
  modalTitle: string
  children: React.ReactNode,
};

export interface ICardProductProps {
  product: IProduct,
  isFavoritePage?: boolean,
  isShoppingBagPage?: boolean
}

export interface IQuantityProduct {
  _id: string,
  quantity: number
}

export interface IButtonAddAmountProductInBagProps {
  id: string,
  productQuantity: number
}

export interface ITotalProductProps {
  index: number,
  title: string,
  quantity: number,
  price: number
}

export interface IPickupPoint {
  _id: string,
  coordinates: string,
  address: string,
  title: string,
  openHours: string
}

export interface IPickupPointsMapProps {
  changePickupPoint: (data: string) => void,
  setOpenModal: (data: boolean) => void
}

export interface IPickupPointOnMapProps {
  item: IPickupPoint, 
  changePickupPoint: (data: string) => void,
  setOpenModal: (data: boolean) => void
}

export interface ICategories {
  title: string,
  _id: string
}

export interface ISearch {
  searchTerm: string
}