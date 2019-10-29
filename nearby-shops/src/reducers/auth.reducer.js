import { SET_MODAL_VISABLITY } from "../actions/auth.action";

const InitialState = {
  token: "",
  modal: true
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISABLITY:
      return { ...state, modal: action.show };
    default:
      return state;
  }
};
