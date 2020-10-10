import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const [location, setLocation] = useState(defaultLocation);

  const getLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
