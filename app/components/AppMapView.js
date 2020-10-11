import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import useLocation from "../hooks/useLocation";

export default function AppMapView({
  dragable = false,
  setMapLocation,
  customLocation,
  style,
}) {
  const location = dragable ? useLocation() : customLocation;

  useEffect(() => {
    if (dragable) setMapLocation(location);
  }, [location]);

  const getRegion = (loc) => {
    return {
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    };
  };

  return (
    <View style={[styles.container, style]}>
      <MapView region={getRegion(location)} style={styles.mapStyle}>
        <Marker
          draggable={dragable}
          coordinate={location}
          onDragEnd={(e) => {
            setMapLocation(e.nativeEvent.coordinate);
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    height: 200,
    borderRadius: 40,
    overflow: "hidden",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});
