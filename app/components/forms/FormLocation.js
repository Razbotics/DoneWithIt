import { useFormikContext } from "formik";
import React from "react";
import AppMapView from "../AppMapView";
import ErrorMessage from "./ErrorMessage";

function FormLocation({ name }) {
  const { setFieldValue, errors, touched } = useFormikContext();
  const setLocation = (location) => {
    setFieldValue(name, location);
  };
  return (
    <>
      <AppMapView
        dragable={true}
        customLocation={{ latitude: 15.0, longitude: 72.0 }}
        setMapLocation={setLocation}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormLocation;