import { useEffect, useState } from 'react';
import Bowser from 'bowser';

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const browser = Bowser.getParser(window.navigator.userAgent).getBrowserName();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((coordinates) => {
      setLatitude(coordinates.coords.latitude);
      setLongitude(coordinates.coords.longitude);
    });
  }, []);

  return { latitude, longitude, browser };
};
