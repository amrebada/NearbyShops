import Axios from "axios";
import config from "../config.json";

export const sendLogin = async (email, password) => {
  return await Axios.post(config.API_URL + "/login", { email, password });
};


export const sendSignup = async (email, password, cpassword) => {
  return await Axios.post(config.API_URL + "/signup", { email, password, cpassword });
};
