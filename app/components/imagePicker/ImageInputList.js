import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((imageUri) => (
            <ImageInput
              key={imageUri}
              imageUri={imageUri}
              onChangeImage={() => {
                onRemoveImage(imageUri);
              }}
            />
          ))}
          <ImageInput imageUri="" onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default ImageInputList;
