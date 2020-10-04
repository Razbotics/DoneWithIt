import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import useLocation from "../hooks/useLocation";

export default function AppMapView({ dragable = false, setMapLocation }) {
  let currentLocation = useLocation();
  if (!currentLocation) {
    currentLocation = {
      latitude: 37.78825,
      longitude: -122.4324,
    };
  }
  const [location, setLocation] = useState(currentLocation);

  const region = {
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  };

  return (
    <View style={styles.container}>
      <MapView region={region} style={styles.mapStyle}>
        <Marker
          draggable={dragable}
          coordinate={location}
          onDragEnd={(e) => {
            setLocation(e.nativeEvent.coordinate);
            setMapLocation(location);
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
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
