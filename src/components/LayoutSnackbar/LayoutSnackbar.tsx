import { Snackbar } from '@mui/material'
import { useActions, useTypedSelector } from '../../hooks';

const LayoutSnackbar = () => {
  const { error, openSnack } = useTypedSelector(state => state.error);
  const { clearError } = useActions();

  return (
    <Snackbar
      open={openSnack}
      message={error}
      autoHideDuration={3000}
      onClose={clearError}
    />
  );
};

export default LayoutSnackbar;