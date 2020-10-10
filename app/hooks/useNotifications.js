import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import expoPushTokenApi from "../api/expoPushToken";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
  }),
});

export default useNotifications = (notificationListener) => {
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
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token.data);
    } catch (error) {
      console.log(error);
    }
  };
};
