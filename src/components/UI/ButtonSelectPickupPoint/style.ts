import { colorTheme } from "../../../themes/rootTheme";

export const styles = {
  backgroundColor: 'white',
  boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
  borderRadius: '22px',
  width: '300px',
  height: '50px',
  color: colorTheme.palette.primary.light,
  transition: 'all .3s',
  fontWeight: 700,
  fontSize: '15px',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'scale(1.1)'
  },
  '@media (max-width: 850px)': {
    width: '200px',
    fontSize: '12px',
    height: '35px'
  }
}