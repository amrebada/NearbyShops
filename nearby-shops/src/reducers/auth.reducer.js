import { SET_MODAL_VISABLITY, SET_TOKEN } from "../actions/auth.action";

const InitialState = {
  token: localStorage.getItem('token'),
  modal: localStorage.getItem('token') === null || localStorage.getItem('token') === ""
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case SET_MODAL_VISABLITY:
      return { ...state, modal: action.show };

    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
