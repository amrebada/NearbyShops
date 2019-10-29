import { ALL, SET_MODE } from "../actions/shops.action";


export default (state = ALL, action) => {
    switch (action.type) {
        case SET_MODE:
            return action.mode;
        default:
            return state;
    }
}