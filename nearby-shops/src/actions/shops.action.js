
export const SET_SHOPS = "SET_SHOPS";
export const SET_SELECTED = "SET_SELECTED";
export const CLEAR = "CLEAR";

export const setShops = (shops) => ({ type: SET_SHOPS, shops })
export const setSelected = (id) => ({ type: SET_SELECTED, id })
export const clear = () => ({ type: CLEAR })