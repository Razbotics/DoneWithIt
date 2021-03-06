import client from "./client";
const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const deleteListing = (listingId) => client.delete(endpoint + "/" + listingId);
const postListing = (listing, handleChange) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category._id);
  data.append("description", listing.description);
  listing.images.map((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );
  data.append("location", JSON.stringify(listing.location));
  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      handleChange(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  deleteListing,
  postListing,
};
