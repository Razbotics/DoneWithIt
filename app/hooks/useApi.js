import { useState } from "react";
import { Alert } from "react-native";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [retries, setRetries] = useState(0);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      console.log(response);
      return setError(true);
    }

    setError(false);
    setData(response.data);
    return response.ok;
  };

  const alertWindow = () => {
    if (error) {
      Alert.alert(
        "Server Error",
        "Couldn't reach server, check your internet connection",
        [
          {
            text: "Retry",
            onPress: () => {
              setError(false);
              setRetries(retries + 1);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  alertWindow();

  return { request, data, error, retries, loading };
};
