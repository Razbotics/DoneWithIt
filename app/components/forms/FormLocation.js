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
      <AppMapView dragable={true} setMapLocation={setLocation} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormLocation;
