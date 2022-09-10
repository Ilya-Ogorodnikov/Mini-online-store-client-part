import { FC } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControl,
  FormHelperText
} from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { Container } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks';
import { ISignUpFormValues } from '../../models';
import { schemaForSignUp } from '../../helpers/validation';
import { styles } from './style';

const SignUpForm: FC = () => {
  const { signUp } = useActions();
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<ISignUpFormValues>({
    resolver: yupResolver(schemaForSignUp),
    defaultValues: {
      address: '',
      checkbox: false,
      confirmPassword: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  });

  const onSub: SubmitHandler<ISignUpFormValues> = async (data) => {
    signUp(data);
    navigate('/');
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        sx={styles.loginTitle}
      >
        Регистрация
      </Typography>

      <form onSubmit={handleSubmit(onSub)}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                label="Имя"
                variant="outlined"
                value={field.value}
                fullWidth
                margin="dense"
                onChange={(event) => field.onChange(event)}
                error={!!errors.firstName?.message}
                helperText={errors.firstName?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                label="Фамилия"
                variant="outlined"
                value={field.value}
                fullWidth
                margin="dense"
                onChange={(event) => field.onChange(event)}
                error={!!errors.lastName?.message}
                helperText={errors.lastName?.message}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              label="Email"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                label="Пароль"
                type="password"
                variant="outlined"
                value={field.value}
                fullWidth
                margin="dense"
                onChange={(event) => field.onChange(event)}
                error={!!errors.password?.message}
                helperText={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <TextField
                label="Повторите пароль"
                type="password"
                variant="outlined"
                value={field.value}
                fullWidth
                margin="dense"
                onChange={(event) => field.onChange(event)}
                error={!!errors.confirmPassword?.message}
                helperText={errors.confirmPassword?.message}
              />
            )}
          />
        </Box>

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              label="Адрес"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.address?.message}
              helperText={errors.address?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              label="Телефон"
              variant="outlined"
              value={field.value}
              fullWidth
              margin="dense"
              onChange={(event) => field.onChange(event)}
              error={!!errors.phoneNumber?.message}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />

        <Box sx={styles.loginButtonsGroup}>
          <Box sx={styles.loginAgreement}>
            <FormControl error={!!errors.checkbox?.message}>
              <Controller
                control={control}
                name="checkbox"
                render={({ field }) => (
                  <Checkbox onChange={(event) => field.onChange(event)} />
                )}
              />
            </FormControl>

            <Typography
              variant="body1"
              component="h4"
              sx={styles.loginAgreementText}
            >
              Даю согласие на обработку персональных данных
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={styles.loginButtonSubmit}
          >
            Зарегистрироваться
          </Button>
        </Box>

        <FormHelperText sx={styles.loginFormHelperText}>
          {errors.checkbox?.message}
        </FormHelperText>
      </form>
    </Container>
  );
};

export default SignUpForm;
