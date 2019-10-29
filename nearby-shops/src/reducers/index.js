import { combineReducers } from "redux";
import auth from "./auth.reducer";
import shops from "./shops.reducer";
import mode from "./mode.reducer";

export default combineReducers({
    auth,
    shops,
    mode
})