import { FC } from 'react';
import { Box } from '@mui/system';
import {
  Container,
  Typography,
  Modal
} from '@mui/material';
import { IModalProps } from '../../../models';
import { styles } from './style';

const ModalWindow: FC<IModalProps> = ({
  children,
  open,
  close,
  modalTitle
}) => (
  <Modal
    open={open}
    onClose={() => close(false)}
    sx={{margin: 1}}
  >
    <Container sx={styles.modalContainer}>
      <Typography
          variant="h5"
          component="h2"
          sx={styles.modalTitle}
        >
          {modalTitle}
      </Typography>

      <Box sx={{height: '90%'}}>{children}</Box>
    </Container>
  </Modal>
);

export default ModalWindow;