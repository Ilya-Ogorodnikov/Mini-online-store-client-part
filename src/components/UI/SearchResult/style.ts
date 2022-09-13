import { colorTheme } from '../../../themes/rootTheme';

export const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colorTheme.palette.secondary.main,
    color: colorTheme.palette.primary.main,
    position: 'absolute',
    p: 2,
    width: 500,
    minHeight: 50,
    left: '27.5%',
    top: '90%',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    borderRadius: '10px',
    '@media (max-width: 945px)': {
      width: 380
    },
    '@media (max-width: 750px)': {
      width: 300
    },
    '@media (max-width: 550px)': {
      display: 'none'
    }
  },
  searchlink: {
    textDecoration: 'none'
  },
  searchItem: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colorTheme.palette.secondary.light,
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 1px 4px',
    borderRadius: '10px',
    mb: 1.5,
    p: 2,
    width: 475,
    '@media (max-width: 945px)': {
      width: 360
    },
    '@media (max-width: 750px)': {
      width: 280
    },
    '@media (max-width: 550px)': {
      display: 'none'
    }
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    '@media (max-width: 945px)': {
      fontSize: 12
    },
    '@media (max-width: 750px)': {
      fontSize: 10
    },
  },
  textBlue: {
    color: colorTheme.palette.primary.light,
    width: 90,
    '@media (max-width: 945px)': {
      width: 80,
    },
  },
  button: {
    width: 150,
    color: colorTheme.palette.secondary.light,
    ":hover": {
      backgroundColor: colorTheme.palette.primary.dark,
    }
  }
};
