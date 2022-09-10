import { colorTheme } from "../../../themes/rootTheme";

export const styles = {
  backgroundColor: colorTheme.palette.primary.light,
  boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
  borderRadius: '22px',
  width: '300px',
  height: '50px',
  color: 'white',
  transition: 'all .3s',
  fontWeight: 700,
  fontSize: '18px',
  '&:hover': {
    backgroundColor: colorTheme.palette.primary.light,
    transform: 'scale(1.1)'
  },
  '@media (max-width: 410px)': {
    width: '150px',
    fontSize: '12px',
    height: '35px'
  }
}