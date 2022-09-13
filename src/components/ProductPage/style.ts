import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  pageProductWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  pageProductBody: {
    flex: '1 0 auto'
  },
  pageProductContentBox: {
    maxWidth: '900px',
    marginTop: '83px',
    marginX: 'auto',
    '@media(max-width: 800px)': {
      marginTop: '40px',
    },
    '@media(max-width: 600px)': {
      marginTop: '0',
    }
  },
  pageProductTitle: {
    padding: 1,
    fontWeight: 700,
    lineHeight: '36px',
    fontSize: '30px',
    '@media(max-width: 600px)': {
      fontSize: '20px',
      textAlign: 'center'
    }
  },
  pageProductImagesBox: {
    marginY: 5,
    display: 'flex',
    justifyContent: 'center',
    '@media(max-width: 800px)': {
      flexDirection: 'column',
      width: '30vh',
      margin: '0 auto'
    }
  },
  pageProductActions: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 7,
    '@media(max-width: 800px)': {
      flexDirection: 'column',
      gap: 2,
      marginTop: 2
    }
  },
  pageProductPrice: {
    color: colorTheme.palette.primary.light,
    fontWeight: 700,
    lineHeight: '36px',
    fontSize: '30px',
    '@media(max-width: 600px)': {
      fontSize: '20px'
    }
  },
  pageProductButtonsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  pageProductSelectIcon: {
    color: colorTheme.palette.primary.contrastText,
    fontSize: '42px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    },
    '@media(max-width: 600px)': {
      fontSize: '30px'
    }
  },
  pageProductIcon: {
    color: colorTheme.palette.primary.main,
    fontSize: '42px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    },
    '@media(max-width: 600px)': {
      fontSize: '30px'
    }
  },
  pageProductCounterBox: {
    display: 'flex',
    gap: 1
  },
  pageProductDescription: {
    minWidth: '300px',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '30px',
    marginY: 6,
    paddingLeft: 3.5,
    '@media(max-width: 600px)': {
      fontSize: '16px'
    }
  },
  pageProductFeaturesBox: {
    paddingX: 2
  },
  pageProductFooter: {
    flex: '0 0 auto'
  }
}