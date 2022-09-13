import { colorTheme } from '../../themes/rootTheme'; 

export const styles = {
  footer: {
    backgroundColor: colorTheme.palette.secondary.main,
    padding: '30px 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  footerInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginBottom: '25px',
    '@media (max-width: 680px)': {
      flexDirection: 'column',
    },
  },
  footerLinks: {
    width: '500px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '25px',
    flexDirection: 'column',
    '@media (max-width: 680px)': {
      flexDirection: 'row',
      width: '120px',
      justifyContent: 'center',
      height: '220px',
      gap: '10px',
    },
  },
  footerLinkTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    '@media (max-width: 680px)': {
      fontSize: '12px',
    },
  },
  footerCopyright: {
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '18px',
    textAlign: 'center',
    '@media (max-width: 680px)': {
      fontSize: '12px',
    },
  },
  footerLogo: {
    height: '65px'
  },
};