import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: 3,
    padding: 2,
    borderRadius: '22px',
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)'
  },
  cardMedia: {
    objectFit: 'contain',
    borderRadius: '22px'
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    py: 2,
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '25px'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardPrice: {
    color: colorTheme.palette.primary.light,
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '19px'
  },
  cardIcons: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  cardIcon: {
    color: colorTheme.palette.primary.main,
    fontSize: '30px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    }
  },
  cardSelectIconFavorite: {
    color: colorTheme.palette.primary.contrastText,
    fontSize: '30px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    }
  },
  cardSelectIconShoppingBag: {
    color: colorTheme.palette.primary.light,
    fontSize: '30px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    }
  }
}