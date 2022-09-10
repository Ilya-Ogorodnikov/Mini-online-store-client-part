import { createTheme } from '@mui/material';

const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#424242',
      light: '#45BEFA',
      contrastText: '#EB3636',
      dark: '#1976d2',
    },
    secondary: {
      main: '#F9F9F9',
      light: '#FFF'
    },
  },
});

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.primary.light,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.secondary.main,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colorTheme.palette.primary.main,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colorTheme.palette.secondary.main
        }
      }
    }
  },
});

export {
  colorTheme,
  theme,
};