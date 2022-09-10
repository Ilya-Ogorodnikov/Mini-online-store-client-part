import * as yup from "yup";
import {
  validRegExForPassword,
  phoneNumberRegEx,
  REQUIRED_TEXT,
} from "../constants";

const schemaForSignIn = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .email("Email должен быть вида aaaaa.bb@gmail.com или aaaaa@gmail.com"),
  password: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      validRegExForPassword,
      "Пароль должен содержать минимум 6 латинских символов, включая одну цифру"
    ),
});
const schemaForSignUp = yup.object().shape({
  firstName: yup.string().trim().required(REQUIRED_TEXT),
  lastName: yup.string().trim().required(REQUIRED_TEXT),
  email: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .email("Email должен быть вида aaaaa.bb@gmail.com или aaaaa@gmail.com"),
  password: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      validRegExForPassword,
      "Пароль должен содержать минимум 6 латинских символов, включая одну цифру"
    ),
  confirmPassword: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
  address: yup.string().trim().required(REQUIRED_TEXT),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneNumberRegEx, "Укажите коректный телефонный номер")
    .required(REQUIRED_TEXT),
  checkbox: yup
    .boolean()
    .oneOf([true], "Согласитесь на обработку ваших данных")
    .required("Согласитесь на обработку ваших данных"),
});
const shemaForEmail = yup.object().shape({
  email: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .email("Email должен быть вида aaaaa.bb@gmail.com или aaaaa@gmail.com"),
});

const schemaForResetPassword = yup.object().shape({
  password: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .matches(
      validRegExForPassword,
      "Пароль должен содержать минимум 6 латинских символов, включая одну цифру"
    ),
  repeatPassword: yup
    .string()
    .required(REQUIRED_TEXT)
    .trim()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});
export {
  schemaForSignUp,
  schemaForSignIn,
  shemaForEmail,
  schemaForResetPassword,
};
