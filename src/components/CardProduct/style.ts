import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  cardWrapper: {
    position: 'relative',
    display: 'flex',
    margin: 3,
    padding: 2,
    borderRadius: '22px',
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 700px)': {
      flexDirection: 'column'
    }
  },
  cardActionArea: {
    width: '30%',
    '@media (max-width: 700px)': {
      width: '100%'
    }
  },
  cardMedia: {
    objectFit: 'contain',
    borderRadius: '22px',
    height: '200px',
    '@media (max-width: 410px)': {
      height: '150px'
    }
  },
  cardContent:{
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 4,
    '@media (max-width: 700px)': {
      alignItems: 'center',
      width: '100%'
    },
    '@media (max-width: 410px)': {
      gap: 2
    }
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '25px',
    width: '400px',
    '@media (max-width: 700px)': {
      width: 'auto'
    },
    '@media (max-width: 410px)': {
      fontSize: '20px',
    }
  },
  cardBoxPrice: {
    display: 'flex',
    gap: 0.5
  },
  cardPriceText: {
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '19px',
    '@media (max-width: 410px)': {
      fontSize: '15px'
    }
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
    lineHeight: '19px',
    '@media (max-width: 410px)': {
      fontSize: '15px'
    }
  },
  cardButtonsFavoritePage: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    '@media(max-width: 700px)': {
      flexDirection: 'column'
    }
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center'
  },
  cardActions: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  },
  cardButton: {
    borderRadius: '22px',
    '@media (max-width: 410px)': {
      fontSize: '9px'
    }
  },
  cardRemove: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: '30px',
    cursor: 'pointer',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.3)'
    },
    '@media (max-width: 410px)': {
      fontSize: '22px'
    }
  },
  cardShoppingBag: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    '@media (max-width: 410px)': {
      flexDirection: 'column',
      gap: 2
    }
  },
  cardAmountProduct: {
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '25px',
    '@media (max-width: 410px)': {
      fontSize: '20px'
    }
  }
}