import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.0.106:9000/api",
  },
  stag: {
    apiUrl: "https://razbotics.ngrok.io/api",
  },
  prod: {
    apiUrl: "http://3.138.179.227:9500/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.stag;
  return settings.prod;
};

export default getCurrentSettings();
