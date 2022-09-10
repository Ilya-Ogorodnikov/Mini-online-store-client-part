import { colorTheme } from '../../themes/rootTheme';

export const styles = {
  headerWrapper: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backgroundColor: colorTheme.palette.secondary.light
  },
  headerAppBar: {
    background: "inherit",
    boxShadow: "none",
    maxWidth: 1200,
  },
  headerToolBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 3,
    '@media (max-width: 400px)': {
      flexDirection: 'column'
    }
  },
  headerLink: {
    fontSize: 20,
    fontWeight: 700,
    textDecoration: "none",
    color: colorTheme.palette.primary.main,
    backgroundColor: 'transparent'
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: 2.5
  },
  headerIconsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  headerIcon: {
    color: colorTheme.palette.primary.main,
    fontSize: '30px',
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  headerBadge: {
    transition: '.3s all',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  searchBar: {
    width: 450,
    '@media (max-width: 945px)': {
      width: 350
    },
    '@media (max-width: 750px)': {
      width: 150
    },
    '@media (max-width: 550px)': {
      display: 'none'
    }
  }
};
