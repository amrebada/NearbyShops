import { SET_SHOPS, SET_SELECTED, CLEAR, ALL, LIKE, DISLIKE } from "../actions/shops.action";

const InitialState = [
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.209000, 55.270000],
        id: 1,

    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.208000, 55.272000],
        id: 2
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.207000, 55.273000],
        id: 3
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.206000, 55.274000],
        id: 4
    },

    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.205000, 55.275000],
        id: 5
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.204000, 55.260000],
        id: 6
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.203000, 55.277000],
        id: 7
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.202000, 55.278000],
        id: 8
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.201000, 55.279000],
        id: 9
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: LIKE,
        location: [25.219000, 55.270000],
        id: 10
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.218000, 55.270000],
        id: 11
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: LIKE,
        location: [25.217000, 55.270000],
        id: 12
    },

    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: DISLIKE,
        location: [25.216000, 55.270000],
        id: 13
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.215000, 55.270000],
        id: 14
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.214000, 55.270000],
        id: 15
    },
    {
        img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
        name: "Paul & Pear",
        mode: ALL,
        location: [25.213000, 55.270000],
        id: 16
    },
];

export default (state = InitialState, action) => {

    switch (action.type) {
        case SET_SHOPS:

            return [...action.shops];
        case SET_SELECTED:
            return state.map(shop => shop.id === action.id ? { ...shop, selected: true } : { ...shop, selected: false })

        case CLEAR:
            return state.map(shop => ({ ...shop, selected: false }));
        default:
            return state
    }
}