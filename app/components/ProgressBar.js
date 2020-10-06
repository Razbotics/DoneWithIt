import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import Doneindicator from "./DoneIndicator";

function ProgressBar({ visible, percent, onDone }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        {percent < 1 ? (
          <Progress.Bar
            progress={percent}
            width={300}
            height={20}
            borderRadius={10}
            color={colors.primary}
          />
        ) : (
          <Doneindicator visible={true} onDone={onDone} />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProgressBar;
