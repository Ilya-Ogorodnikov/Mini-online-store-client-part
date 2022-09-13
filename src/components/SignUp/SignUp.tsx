import { FC } from 'react';
import { Container } from '@mui/system';
import { SignUpForm, Header } from '../';
import { styles } from './style';

const SignUp: FC = () => {
  return (
    <>
      <Header
        titleLink="Вход"
        pathLink="/login"
      />

      <Container
        maxWidth="sm"
        sx={styles}
      >
        <SignUpForm />
      </Container>
    </>
  );
};

export default SignUp;
