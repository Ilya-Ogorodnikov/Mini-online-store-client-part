export const styles = {
  width: '150px',
  height: '43px',
  marginRight: 3,
  borderRadius: '22px',
  boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(66, 66, 66, 0.5)',
  color: 'white',
  transition: 'all .3s',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'rgba(66, 66, 66, 0.5)',
    transform: 'scale(1.1)'
  },
  '@media (max-width: 410px)': {
    height: '30px'
  }
}