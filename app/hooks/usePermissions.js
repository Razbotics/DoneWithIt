import { useEffect } from "react";
import * as Permissions from "expo-permissions";

export default usePermissions = () => {
  const getPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(
        Permissions.LOCATION,
        Permissions.NOTIFICATIONS,
        Permissions.CAMERA_ROLL
      );
      if (status !== "granted") {
        alert("Permissions not granted");
        return false;
      }
    } catch (error) {
      if (__DEV__) console.log(error);
      return false;
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  return true;
};
