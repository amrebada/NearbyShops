import Axios from "axios";

import config from "../config.json";
export const getShops = async (location) => {
    let token = localStorage.getItem('token');

    if (Location) {
        return await Axios.get(config.API_URL + `/shops?location=${location[0]},${location[1]}`, {
            headers: token === null || token === "" ? {} : {
                authorization: token
            }
        });
    } else {
        return null;
    }
}