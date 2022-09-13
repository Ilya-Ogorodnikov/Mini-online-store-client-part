export const styles = {
  favoriteWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  favoriteBody: {
    flex: '1 0 auto'
  },
  favoriteContainer: {
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
  favoriteTitle: {
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
  favoriteFooter: {
    flex: '0 0 auto'
  }
}