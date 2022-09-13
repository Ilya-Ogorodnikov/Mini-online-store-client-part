import { colorTheme } from '../../../themes/rootTheme';

export const styles = {
  activeButton: {
    color: colorTheme.palette.primary.light,
    height: '33px',
    width: '33px',
    cursor: 'pointer',
    transition: 'all .3s',
    '&:hover': {
      transform: 'scale(1.1)'
    },
    '@media (max-width: 410px)': {
      height: '27px',
      width: '27px'
    }
  },
  inactiveButton: {
    color: 'lightgray',
    height: '33px',
    width: '33px',
    '@media (max-width: 410px)': {
      height: '27px',
      width: '27px'
    }
  }
}