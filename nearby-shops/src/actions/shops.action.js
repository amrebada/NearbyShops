export const SET_SHOPS = "SET_SHOPS";
export const SET_SELECTED = "SET_SELECTED";
export const UPDATE_SHOP = "UPDATE_SHOP";
export const CLEAR = "CLEAR";

export const SET_MODE = "SET_MODE";

export const ALL = 1,
  LIKE = 2,
  DISLIKE = 3;

export const setShops = shops => ({ type: SET_SHOPS, shops });
export const updateShop = (id, mode) => ({ type: UPDATE_SHOP, id, mode });
export const setSelected = id => ({ type: SET_SELECTED, id });
export const clear = () => ({ type: CLEAR });

export const setMode = mode => ({ type: SET_MODE, mode });
