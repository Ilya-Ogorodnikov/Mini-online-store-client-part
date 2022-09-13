import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  mainBody: {
    flex: '1 0 auto',
  },
  mainFooter: {
    flex: '0 0 auto'
  },
  mainTitle: {
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '30px',
    textAlign: 'center',
    py: '29px'
  },
  mainBoxSlider: {
    padding: 1,
    width: '65vw',
    margin: '0 auto',
    '@media (max-width: 1000px)': {
      width: '70vw'
    },
    '@media (max-width: 860px)': {
      width: '100vw'
    },
    '@media (max-width: 730px)': {
      width: '70vw'
    },
    '@media (max-width: 480px)': {
      width: '100vw'
    }
  },
  mainCategorySlider: {
    width: '40vw',
    margin: '0 auto',
    '@media (max-width: 1100px)': {
      width: '60vw'
    },
  },
  mainOneSlideCategory: {
    marginY: 3,
    marginX: 'auto',
    padding: '15px',
    borderRadius: '22px',
    height: '36px',
    width: '150px',
    fontSize: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.3s all',
    background: colorTheme.palette.primary.light,
    '@media (max-width: 400px)': {
      fontSize: '15px'
    },
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: colorTheme.palette.primary.light,
      transform: 'scale(1.1)'
    }
  }
}