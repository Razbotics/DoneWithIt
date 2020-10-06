import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

export default function AppMapView({
  dragable = false,
  setMapLocation,
  customLocation,
  style,
}) {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const [location, setLocation] = useState(defaultLocation);

  const getRegion = (loc) => {
    return {
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    };
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted")
        return alert("Location permission not granted!");
      if (dragable) {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
      } else {
        setLocation(customLocation);
      }
      setMapLocation(location);
    } catch (error) {}
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={[styles.container, style]}>
      <MapView region={getRegion(location)} style={styles.mapStyle}>
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
