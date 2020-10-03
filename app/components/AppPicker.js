import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";
import { ListItemSeparator } from "./lists";

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  fieldWidth = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: fieldWidth }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={defaultStyles.colors.meduim}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={defaultStyles.colors.meduim}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.closeBtnContainer}>
            <MaterialCommunityIcons
              name="chevron-up"
              size={25}
              color={defaultStyles.colors.meduim}
            />
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.itemsContainer}>
          {items.map((item) => (
            <PickerItem
              key={item.value}
              label={item.label}
              name={item.name}
              backgroundColor={item.backgroundColor}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          ))}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  itemsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  closeBtnContainer: {
    backgroundColor: defaultStyles.colors.light,
    marginTop: 5,
    borderRadius: 25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium,
  },
});

export default AppPicker;
