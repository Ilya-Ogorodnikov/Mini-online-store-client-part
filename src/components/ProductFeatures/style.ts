import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  productFeaturesBox: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 4
  },
  productFeaturesHeader: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    marginBottom: 1
  },
  productFeaturesDecorElement: {
    width: '26px',
    height: '26px',
    backgroundColor: colorTheme.palette.primary.light,
    borderRadius: '50%'
  },
  productFeaturesName: {
    fontWeight: 500,
    fontSize: '20px',
    '@media(max-width: 600px)': {
      fontSize: '16px'
    }
  },
  productFeaturesDescription: {
    paddingLeft: '42px',
    fontWeight: 500,
    fontSize: '17px',
    lineHeight: '24px',
    '@media(max-width: 600px)': {
      fontSize: '14px'
    }
  }
}