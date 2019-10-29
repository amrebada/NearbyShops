import React from 'react';

import classes from "./Shops.css";
import ShopItem from './ShopItem/ShopItem';


const Shops = (props) => {
    const data = [
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },

        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },

        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
        {
            img: "https://www.meydangolf.com/sites/default/files/2018-07/shop_banner_img.jpg",
            name: "Paul & Pear"
        },
    ]

    return (<div className={classes.container}>
        <h3>216 Shops around you</h3>
        {data.map((d, i) => <React.Fragment key={i}><ShopItem img={d.img} name={d.name} /> <br /></React.Fragment>)}
        <br />

    </div>);
}

export default Shops;