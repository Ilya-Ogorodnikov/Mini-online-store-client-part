import { colorTheme } from '../../../themes/rootTheme';

export const styles = {
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 800,
    height: '80%',
    backgroundColor: colorTheme.palette.secondary.main,
    boxShadow: '5px 6px 6px -4px rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    padding: 2,
  },
  modalTitle: {
    textAlign: 'center',
    paddingBottom: 3
  }
};