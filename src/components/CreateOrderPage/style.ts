import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  createOrderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  createOrderBody: {
    flex: '1 0 auto'
  },
  createOrderRelativeBoxContent: {
    paddingX: 3
  },
  createOrderBoxContent: {
    padding: 4,
    backgroundColor: colorTheme.palette.secondary.main,
    borderRadius: '22px',
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    marginY: 8,
    marginX: 'auto',
    '@media(max-width: 700px)': {
      padding: 2,
      maxWidth: '300px'
    },
    '@media(max-width: 350px)': {
      padding: 1,
    }
  },
  createOrderTitle: {
    color: colorTheme.palette.primary.light,
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '36px',
    marginBottom: 3,
    '@media(max-width: 850px)': {
      fontSize: '25px'
    },
    '@media(max-width: 700px)': {
      paddingLeft: 2,
    },
    '@media(max-width: 650px)': {
      fontSize: '17px',
      marginBottom: 1
    }
  },
  createOrderInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingX: 5,
    marginBottom: 2,
    alignItems: 'center',
    '@media(max-width: 700px)': {
      flexDirection: 'column',
      gap: 1.5
    }
  },
  createOrderBoxSelectButton: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    '@media(max-width: 700px)': {
      order: 1
    }
  },
  createOrderPriceBox: {
    display: 'flex',
    gap: 0.5,
    '@media(max-width: 700px)': {
      order: 0
    }
  },
  createOrderPriceText: {
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '19px',
    '@media (max-width: 850px)': {
      fontSize: '25px'
    },
    '@media (max-width: 650px)': {
      fontSize: '17px'
    }
  },
  createOrderTotalSum: {
    color: colorTheme.palette.primary.light,
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '19px',
    '@media (max-width: 850px)': {
      fontSize: '25px'
    },
    '@media (max-width: 650px)': {
      fontSize: '17px'
    }
  },
  createOrderButtonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    '@media(max-width: 700px)': {
      justifyContent: 'center'
    }
  },
  createOrderActiveButton: {
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
    borderRadius: '22px',
    width: '300px',
    height: '50px',
    color: 'white',
    transition: 'all .3s',
    fontWeight: 700,
    fontSize: '18px',
    '&:hover': {
      backgroundColor: colorTheme.palette.primary.light,
      transform: 'scale(1.1)'
    },
    '@media (max-width: 850px)': {
      width: '200px',
      fontSize: '12px',
      height: '35px'
    }
  },
  createOrderInActiveButton: {
    backgroundColor: 'lightgray',
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
    borderRadius: '22px',
    width: '300px',
    height: '50px',
    fontWeight: 700,
    fontSize: '18px',
    '&:hover': {
      backgroundColor: 'lightgray',
      transform: 'scale(1.1)'
    },
    '@media (max-width: 850px)': {
      width: '200px',
      fontSize: '12px',
      height: '35px'
    }
  },
  createOrderFooter: {
    flex: '0 0 auto'
  },
  createOrderPickupPoint: {
    fontSize: '20px',
    fontWeight: 500,
    textAlign: 'center',
    '@media (max-width: 850px)': {
    fontSize: '15px'
    }
  },
  createOrderSuccessBox: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  createOrderSuccessTitle: {
    fontWeight: 700,
    fontSize: '30px',
    mb: '15px',
    '@media(max-width: 500px)': {
      fontSize: '17px'
    }
  },
  createOrderRedirectButton: {
    color: 'white',
    transition: '.3s all',
    '&:hover': {
      backgroundColor: colorTheme.palette.primary.light,
      transform: 'scale(1.1)'
    },
  }
}