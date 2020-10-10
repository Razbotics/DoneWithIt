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
      if (__DEV__) console.log(response);
      if (!response.status || response.status > 402) alertWindow();
    }

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  const alertWindow = () => {
    Alert.alert(
      "Server Error",
      "Couldn't reach server, check your internet connection",
      [
        {
          text: "Retry",
          onPress: () => {
            setRetries(retries + 1);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return { request, data, error, retries, loading, alertWindow };
};
