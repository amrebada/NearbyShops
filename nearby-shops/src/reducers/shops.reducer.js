import {
  SET_SHOPS,
  SET_SELECTED,
  CLEAR,
  ALL,
  LIKE,
  DISLIKE,
  UPDATE_SHOP
} from "../actions/shops.action";

const InitialState = [
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.209, 55.27],
    id: 1
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.208, 55.272],
    id: 2
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.207, 55.273],
    id: 3
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.206, 55.274],
    id: 4
  },

  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.205, 55.275],
    id: 5
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.204, 55.26],
    id: 6
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.203, 55.277],
    id: 7
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.202, 55.278],
    id: 8
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.201, 55.279],
    id: 9
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: LIKE,
    location: [25.219, 55.27],
    id: 10
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.218, 55.27],
    id: 11
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: LIKE,
    location: [25.217, 55.27],
    id: 12
  },

  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: DISLIKE,
    location: [25.216, 55.27],
    id: 13
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.215, 55.27],
    id: 14
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.214, 55.27],
    id: 15
  },
  {
    photo:
      "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
    name: "Paul & Pear",
    mode: ALL,
    location: [25.213, 55.27],
    id: 16
  }
];

export default (state = { shops: InitialState, selected: null }, action) => {
  switch (action.type) {
    case SET_SHOPS:
      return { ...state, shops: [...action.shops] };
    case SET_SELECTED:
      return { ...state, selected: action.id };

    case CLEAR:
      return { ...state, selected: action.id };

    case UPDATE_SHOP:
      return {
        ...state,
        shops: state.shops.map(s =>
          s.id === action.id ? { ...s, mode: action.mode } : { ...s }
        )
      };
    default:
      return state;
  }
};
