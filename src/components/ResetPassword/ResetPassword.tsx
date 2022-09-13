import {
  FC,
  useEffect
} from 'react';
import {
  Button,
  TextField,
  Typography
} from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from '..';
import { useTypedSelector, useActions  } from '../../hooks';
import { IResetPassword } from '../../models';
import { schemaForResetPassword } from '../../helpers/validation';
import { styles } from './style';

const ResetPassword: FC = () => {
  const { isValidToken, currentUserId } = useTypedSelector(state => state.resetPassword);
  const { validUser, newPassword } = useActions();
  const param = useParams<{ token: string }>();

  const { control, handleSubmit, formState: { errors } } = useForm<IResetPassword>({
    resolver: yupResolver(schemaForResetPassword),
    defaultValues: {
      password: '',
      repeatPassword: ''
    }
  });

  useEffect(() => {
    if (!param.token) {
      return;
    };
    validUser(param.token);
  }, [param.token]);

  const loginValidUser: SubmitHandler<IResetPassword> = async (data) => {
    
    if (!currentUserId) {
      return;
    };
    
    newPassword(currentUserId, data.password);
  };

  return (
    <>
      <Header
        titleLink="Вход"
        pathLink="/"
      />

      <Container sx={styles.resetPasswordWrapper}>
        {isValidToken ? (
          <>
            <Typography
              variant="h4"
              component="h2"
              sx={styles.resetPasswordTitle}
            >
              Сбросить пароль
            </Typography>

            <form onSubmit={handleSubmit(loginValidUser)}>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    label="Новый пароль"
                    type="password"
                    variant="outlined"
                    value={field.value}
                    fullWidth
                    margin="dense"
                    onChange={(event) => field.onChange(event)}
                    error={!!errors.password?.message}
                    helperText={errors.password?.message}
                    sx={{ paddingBottom: 2 }}
                  />
                )}
              />

              <Controller
                control={control}
                name="repeatPassword"
                render={({ field }) => (
                  <TextField
                    label="Повторите пароль"
                    type="password"
                    variant="outlined"
                    value={field.value}
                    fullWidth
                    margin="dense"
                    onChange={(event) => field.onChange(event)}
                    error={!!errors.repeatPassword?.message}
                    helperText={errors.repeatPassword?.message}
                  />
                )}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={styles.resetPasswordSubmit}
              >
                Сменить пароль
              </Button>
            </form>
          </>
        ) : (
          <Typography
            variant="h6"
            component="p"
          >
            Невозможно изменить пароль. Токен не валидный или устарел
          </Typography>
        )}
      </Container>
    </>
  );
};

export default ResetPassword;
