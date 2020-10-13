import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import useLocation from "../hooks/useLocation";

export default function AppMapView({
  dragable = false,
  setMapLocation,
  customLocation,
  style,
}) {
  const [location, setLocation] = useState(null);
  const initLocation = dragable ? useLocation() : customLocation;

  useEffect(() => {
    setLocation(initLocation);
    if (dragable) setMapLocation(initLocation);
  }, [initLocation]);

  const getRegion = () => {
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    };
  };

  return (
    <View style={[styles.container, style]}>
      {location && (
        <MapView region={getRegion()} style={styles.mapStyle}>
          <Marker
            draggable={dragable}
            coordinate={location}
            onDragEnd={(e) => {
              setMapLocation(e.nativeEvent.coordinate);
              setLocation(e.nativeEvent.coordinate);
            }}
          />
        </MapView>
      )}
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
