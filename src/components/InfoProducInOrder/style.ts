import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  infoProductWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingX: 3,
    marginBottom: 5,
    '@media(max-width: 850px)': {
      marginBottom: 4
    },
    '@media(max-width: 700px)': {
      flexDirection: 'column',
      paddingLeft: 4
    }
  },
  infoProductLeftSection:{
    width: '700px',
    display: 'flex',
    gap: 3,
    '@media(max-width: 1200px)': {
      width: '550px'
    },
    '@media(max-width: 1000px)': {
      width: '350px'
    },
    '@media(max-width: 850px)': {
      width: '300px'
    },
    '@media(max-width: 770px)': {
      width: '200px'
    }
  },
  infoProducText: {
    fontSize: '25px',
    fontWeight: 700,
    lineHeight: '30px',
    '@media(max-width: 850px)': {
      fontSize: '17px'
    }, 
    '@media(max-width: 650px)': {
      fontSize: '14px'
    }
  },
  infoProductRightSection: {
    display: 'flex',
    gap: 3 ,
    justifyContent: 'space-between',
    width: '300px',
    '@media(max-width: 850px)': {
      width: '200px'
    },
    '@media(max-width: 700px)': {
      paddingLeft: 1.8,
      gap: 2
    }
  },
  infoProductPriceBox: {
    display: 'flex',
    gap: 1,
  },
  infoProductPrice: {
    fontSize: '25px',
    fontWeight: 700,
    lineHeight: '30px',
    color: colorTheme.palette.primary.light,
    '@media(max-width: 850px)': {
      fontSize: '14px'
    }
  },
  infoProductSum: {
    '@media(max-width: 850px)': {
      fontSize: '14px'
    },
    '@media(max-width: 650px)': {
      fontSize: '11px'
    }
  }
}