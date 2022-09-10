import { FC } from 'react'
import { Typography } from '@mui/material'
import { Header } from '..'

const NotFoundPage: FC = () => (
  <>
    <Header
      pathLink="login"
      titleLink="Вход"
    />

    <Typography
      variant="h5"
      component="h4"
      sx={{textAlign: "center", fontSize: "25px"}}
    >
      Страница не существует
    </Typography>
  </>
);

export default NotFoundPage;