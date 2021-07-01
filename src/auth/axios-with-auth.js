import Axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return Axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: token,
    },
  });
};
