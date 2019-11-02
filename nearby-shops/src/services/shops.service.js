import Axios from "axios";

import config from "../config.json";
export const getShops = async location => {
  let token = localStorage.getItem("token");

  if (Location) {
    return await Axios.get(
      config.API_URL + `/shops?location=${location[0]},${location[1]}`,
      {
        headers:
          token === null || token === ""
            ? {}
            : {
                authorization: `Bearer ${token}`
              }
      }
    );
  } else {
    return null;
  }
};

export const setMode = async (id, mode) => {
  let token = localStorage.getItem("token");
  console.log(token);

  return await Axios.patch(
    config.API_URL + `/shops/${id}`,
    { mode },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );
};
