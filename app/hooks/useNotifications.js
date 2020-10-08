import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokenApi from "../api/expoPushToken";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
  }),
});

export default useNotifications = (notificationListener) => {
  const [
    permission,
    askForPermission,
  ] = Permissions.usePermissions(Permissions.NOTIFICATIONS, { ask: true });

  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) {
      const eventListener = Notifications.addNotificationResponseReceivedListener(
        notificationListener
      );

      return () => {
        eventListener.remove();
      };
    }
  }, []);

  const registerForPushNotifications = async () => {
    try {
      if (!permission || permission.status !== "granted") askForPermission();
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token.data);
    } catch (error) {
      console.log(error);
    }
  };
};
