import { SET_SHOPS, SET_SELECTED, CLEAR, ALL, LIKE, DISLIKE } from "../actions/shops.action";

const InitialState = [
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.209000, 55.270000],
        id: 1,

    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.208000, 55.272000],
        id: 2
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.207000, 55.273000],
        id: 3
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.206000, 55.274000],
        id: 4
    },

    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.205000, 55.275000],
        id: 5
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.204000, 55.260000],
        id: 6
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.203000, 55.277000],
        id: 7
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.202000, 55.278000],
        id: 8
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.201000, 55.279000],
        id: 9
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: LIKE,
        location: [25.219000, 55.270000],
        id: 10
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.218000, 55.270000],
        id: 11
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: LIKE,
        location: [25.217000, 55.270000],
        id: 12
    },

    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: DISLIKE,
        location: [25.216000, 55.270000],
        id: 13
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.215000, 55.270000],
        id: 14
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.214000, 55.270000],
        id: 15
    },
    {
        photo: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.213000, 55.270000],
        id: 16
    },
];


export default (state = { shops: InitialState, selected: null }, action) => {

    switch (action.type) {
        case SET_SHOPS:

            return { ...state, shops: [...action.shops] };
        case SET_SELECTED:
            return { ...state, selected: action.id }

        case CLEAR:
            return { ...state, selected: action.id }
        default:
            return state
    }
}