import { FC } from 'react';
import {
  Box,
  Button,
  Typography
} from '@mui/material';
import { IPickupPointOnMapProps } from '../../models';

const PickupPointOnMap: FC<IPickupPointOnMapProps> = ({
  item,
  changePickupPoint,
  setOpenModal
}) => {
  const changePickupPointHandler = () => {
    const selectPickupPoint = {
      _id: item._id,
      title: item.title
    };

    localStorage.setItem('pickupPoint', JSON.stringify(selectPickupPoint));
    changePickupPoint(item.title);
    setOpenModal(false);
  };

  return (
    <Box>
      <Typography
        variant="body1"
        component="p"
        sx={{fontWeight: 700}}
      >
        {`"${item.title}"`}
      </Typography>

      <Typography
        variant="body2"
        component="p"
        sx={{fontWeight: 300}}
      >
        {`Адрес: ${item.address}`}
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{fontWeight: 400}}
      >
        {`Ежедневно c ${item.openHours.split('-')[0]} до ${item.openHours.split('-')[1]}`}
      </Typography>

      <Button
        onClick={changePickupPointHandler}
        variant="contained"
        fullWidth
      >
        Выбрать пункт
      </Button>
    </Box>
  );
};

export default PickupPointOnMap;