import { useEffect, useState } from "react";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default useLocation = () => {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const [location, setLocation] = useState(defaultLocation);

  try {
    const [permission] = Permissions.usePermissions(Permissions.LOCATION);

    if (!permission || permission.status !== "granted")
      Location.requestPermissionsAsync();
  } catch (error) {
    console.log(error);
  }

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
