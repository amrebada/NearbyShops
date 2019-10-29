import { combineReducers } from "redux";
import auth from "./auth.reducer";
import shops from "./shops.reducer";


export default combineReducers({
    auth,
    shops
})