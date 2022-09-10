import { api } from '../api';
import { IEmail, ISignUpFormValues } from '../models';
import { apiKey } from '../constants';

const signUpNewUser = ({
  firstName,
  lastName,
  email,
  password,
  address,
  phoneNumber
}: ISignUpFormValues) =>
  api.post("/users/signup", {
    firstName,
    lastName,
    email,
    password,
    address,
    phoneNumber,
  });

const getUserLocation = (latitude: number, longitude: number) =>
  api.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
  );

const loginUser = (
  email: string,
  password: string,
  browser: string,
  city: string,
  country: string
) => api.post("/users/login", { email, password, browser, city, country });

const sendResetPasswordMail = ({ email }: IEmail) =>
  api.post("/users/sendResetPasswordMail", { email });

const validateUser = (refreshToken: string) =>
  api.post("/users/validateUser", { refreshToken });

const changePassword = (userId: string, password: string) =>
  api.patch("/users/changePassword", { userId, password });

export {
  signUpNewUser,
  getUserLocation,
  loginUser,
  validateUser,
  changePassword,
  sendResetPasswordMail,
};
