import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://razbotics.ngrok.io/api",
  },
  stag: {
    apiUrl: "https://razbotics.ngrok.io/api",
  },
  prod: {
    apiUrl: "https://razbotics.ngrok.io/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.stag;
  return settings.prod;
};

export default getCurrentSettings();