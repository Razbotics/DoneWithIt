import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../imagePicker/ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    const uris = [...imageUris, uri];
    setFieldValue(name, uris);
  };

  const handleRemove = (uri) => {
    const uris = imageUris.filter((imageUri) => imageUri !== uri);
    setFieldValue(name, uris);
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
