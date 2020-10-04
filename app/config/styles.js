import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    flexDirection: "row",
    width: "100%",
    fontSize: 16,
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
