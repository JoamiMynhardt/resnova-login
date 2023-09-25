import axios from "axios";
const axiosClient = axios.create({
  headers: {
    Authorization : `Bearer ${sessionStorage.getItem("TOKEN")}`,
  },
  baseURL: process.env.VUE_APP_API

})

export default axiosClient;
