import { colorTheme } from "../../themes/rootTheme";

export const styles = {
  shoppingBagWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  shoppingBagBody: {
    flex: '1 0 auto'
  },
  shoppingBagContainer: {
    width: '850px',
    margin: '0 auto',
    '@media (max-width: 1000px)': {
      width: '700px'
    },
    '@media (max-width: 700px)': {
      width: '400px'
    },
    '@media (max-width: 410px)': {
      width: '300px'
    }
  },
  shoppingBagTitle: {
    marginY: 4,
    marginLeft: 3,
    fontWeight: 700,
    fontSize: '27px',
    lineHeight: '36px',
    '@media (max-width: 410px)': {
      fontSize: '20px',
      marginY: 1
    }
  },
  shoppingBagFooter: {
    flex: '0 0 auto'
  },
  shoppingBagAppBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shoppingBagBoxPrice: {
    display: 'flex',
    gap: 0.5
  },
  shoppingBagText: {
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '19px',
    '@media (max-width: 410px)': {
      fontSize: '18px'
    }
  },
  shoppingBagPrice: {
    color: colorTheme.palette.primary.light,
    fontWeight: 700,
    fontSize: '22px',
    lineHeight: '19px',
    '@media (max-width: 410px)': {
      fontSize: '18px'
    }
  },
  shoppingBagCreateOrder: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: 3,
    marginTop: 7,
    marginBottom: 13,
    '@media (max-width: 700px)': {
      flexDirection: 'column',
      gap: 4
    },
    '@media (max-width: 410px)': {
      marginTop: 1,
      marginBottom: 5,
      gap: 2
    }
  },
}