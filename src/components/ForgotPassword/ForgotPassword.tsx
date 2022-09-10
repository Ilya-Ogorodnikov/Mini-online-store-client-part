import { FC } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container
} from '@mui/material';
import {
  Controller,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useActions } from '../../hooks';
import { shemaForEmail } from '../../helpers/validation';
import { IEmail } from '../../models';
import { styles } from './style';

const LoginForm: FC = () => {
  const { sendMail } = useActions();
  const { control, handleSubmit, formState: { errors } } = useForm<IEmail>({
    resolver: yupResolver(shemaForEmail),
    defaultValues: {
      email: ''
    }
  });

  const sendEmail: SubmitHandler<IEmail> = async (data) => {
    sendMail(data);
  };

  return (
    <Container sx={styles.forgotPasswordWrapper}>
      <Typography
        variant="h4"
        component="h2"
        sx={styles.forgotPasswordTitle}
      >
        Забыл пароль
      </Typography>

      <form onSubmit={handleSubmit(sendEmail)}>
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

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={styles.forgotPasswordButtonSubmit}
        >
          Восстановить пароль
        </Button>
      </form>

      <Link
        style={styles.linkForgotPassword}
        to="/login"
      >
        <Button
          fullWidth
          variant="contained"
          sx={styles.forgotPasswordButtonSubmit}
        >
          Назад
        </Button>
      </Link>
    </Container>
  );
};

export default LoginForm;
