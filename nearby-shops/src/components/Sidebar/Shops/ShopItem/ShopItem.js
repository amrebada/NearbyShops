import React from 'react';

import classes from "./ShopItem.css";

import { IconButton, Fab } from '@material-ui/core';
import { ThumbDown, FavoriteBorder, Favorite } from '@material-ui/icons';

const ShopItem = (props) => {
    const { img, name } = props;

    return (<div className={classes.card}>
        <div className={classes.imgContainer}
            style={{ backgroundImage: `url(${img})` }}
        >
        </div>
        <div className={classes.cardContent}>
            <p style={{ fontSize: '23px' }}>{name}</p>

            <div className={classes.actions}>
                <Fab variant="extended">
                    <ThumbDown /> &nbsp;<span>Dislike</span>
                </Fab>
                <Fab variant="extended" >
                    <Favorite /> &nbsp;<span>Like</span>
                </Fab>
            </div>
        </div>
    </div>);
}

export default ShopItem;