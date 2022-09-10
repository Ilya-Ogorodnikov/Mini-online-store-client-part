import { FC } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography
} from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { Container } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useActions, useGeolocation } from '../../hooks';
import { ILoginFormValues } from '../../models';
import { schemaForSignIn } from '../../helpers/validation';
import { styles } from './style';

const LoginForm: FC = () => {
  const { latitude, longitude, browser } = useGeolocation();
  const { signIn } = useActions();
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<ILoginFormValues>({
    resolver: yupResolver(schemaForSignIn),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const loginValidUser: SubmitHandler<ILoginFormValues> = async (data) => {
    const { email, password } = data;
    signIn(email, password, latitude, longitude, browser);
    navigate('/');
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        sx={styles.loginTitle}
      >
        Вход в систему
      </Typography>

      <form onSubmit={handleSubmit(loginValidUser)}>
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
              sx={{ paddingBottom: 2 }}
            />
          )}
        />

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

        <Box sx={styles.loginButtonsGroup}>
          <Box>
            <Link
              style={styles.loginLink}
              to="/forgot-password"
            >
              <Typography
                variant="body1"
                component="h4"
                style={styles.loginLinkText}
              >
                Забыл пароль?
              </Typography>
            </Link>

            <Link
              style={styles.loginLink}
              to="/sign-up"
            >
              <Typography 
                variant="body1"
                component="h4"
                style={styles.loginLinkText}
              >
                Зарегистрироваться
              </Typography>
            </Link>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={styles.loginButtonSubmit}
          >
            Войти
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default LoginForm;
