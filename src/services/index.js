import axios from "axios";

export const BASE_URL = "https://stage.api.sloovi.com";

export const customHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
};

const sloovi = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default sloovi;
