import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import * as Permission from "expo-permissions";

export default function AppMapView({
  dragable = false,
  setMapLocation,
  customLocation,
}) {
  const defaultLocation = { latitude: 19.006353, longitude: 73.1184 };
  const [location, setLocation] = useState(defaultLocation);

  const getLocation = async () => {
    try {
      const { granted } = await Permission.getAsync(Permission.LOCATION);
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  const getRegion = (loc) => {
    return {
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    };
  };

  useEffect(() => {
    dragable ? getLocation() : setLocation(customLocation);
  }, []);

  return (
    <View style={styles.container}>
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
