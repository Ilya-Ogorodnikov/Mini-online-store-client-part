import { FC } from 'react';
import { Container } from '@mui/system';
import { Header, LoginForm } from '../';
import { styles } from './style';

const SignIn: FC = () => {
  return (
    <>
      <Header
        titleLink="Зарегистрироваться"
        pathLink="/sign-up"
      />

      <Container sx={styles}>
        <LoginForm />
      </Container>
    </>
  );
};

export default SignIn;
