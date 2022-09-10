import {
  FC,
  useEffect,
  useState
} from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent
} from 'react-leaflet';
import L from 'leaflet';
import { Box, CircularProgress } from '@mui/material';
import { PickupPointOnMap } from '../';
import { useGeolocation } from '../../hooks';
import { getAllPickupPoints } from '../../services/product-service';
import { IPickupPoint, IPickupPointsMapProps } from '../../models';
import { mapUrl } from '../../constants';
import { DefaultIcon } from '../../config';
import 'leaflet/dist/leaflet.css';
import { styles } from './style';

const PickupPointsMap: FC<IPickupPointsMapProps> = ({ changePickupPoint, setOpenModal }) => {
  const { latitude, longitude } = useGeolocation();
  const [pickupPoint, setPickupPoint] = useState<IPickupPoint[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  L.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    getPickupPoints();
  }, []);

  const getPickupPoints = async () => {
    setIsLoading(true)
    const resp = await getAllPickupPoints();
    setPickupPoint(resp.data);
    setIsLoading(false);
  };

  // Данные функции нужны именно как компоненты внутри MapContainer
  // Посольку они больше нигде использоваться не будут, я решил
  // оставить их здесь
  const Map  = () => {
    useMap().setView([latitude, longitude]);
    return null;
  };

  const Animate = () => {
    const map = useMapEvent('click', (e) => {
      map.setView(e.latlng, map.getZoom(), {
        animate: true
      })
    });
    return null;
  };

  if (isLoading) {
    return (
      <Box sx={styles.progressContainer}>
        <CircularProgress sx={styles.progressElement} />
      </Box>
    );
  };

  return (
    <MapContainer
      center={[0, 0]}
      scrollWheelZoom={false}
      zoom={10}
      style={{height: '100%', width: '100%'}}
    >
      <TileLayer url= {mapUrl} />

      <Map />

      <Animate />

      {
        pickupPoint?.map(item =>
          <Marker
            key={item._id}
            position={[
              +item.coordinates.split(', ')[0],
              +item.coordinates.split(', ')[1]
            ]}
          >
            <Popup closeButton={false}>
              <PickupPointOnMap
                changePickupPoint={changePickupPoint}
                setOpenModal={setOpenModal}
                item={item}
              />
            </Popup>
          </Marker>
        )
      }
    </MapContainer>
  );
};

export default PickupPointsMap;