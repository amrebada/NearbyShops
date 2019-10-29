import React from "react";

import classes from "./ShopItem.css";

import { LIKE, DISLIKE } from "../../../../actions/shops.action";

import { IconButton, Fab } from "@material-ui/core";
import { ThumbDown, Favorite, Remove } from "@material-ui/icons";

const ShopItem = props => {
  const { img, name, mode } = props.shop;
  let actions = (
    <React.Fragment>
      <Fab variant="extended" color="secondary">
        <ThumbDown /> &nbsp;<span>Dislike</span>
      </Fab>
      <Fab variant="extended" color="primary">
        <Favorite /> &nbsp;<span>Like</span>
      </Fab>
    </React.Fragment>
  );
  if (mode === LIKE || mode === DISLIKE) {
    actions = (
      <Fab variant="extended" color="secondary">
        <Remove /> &nbsp;<span>remove</span>
      </Fab>
    );
  }
  return (
    <div
      className={classes.card}
      onMouseEnter={props.onHover}
      onMouseLeave={props.onBlur}
    >
      <div
        className={classes.imgContainer}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={classes.cardContent}>
        <p style={{ fontSize: "23px" }}>{name}</p>

        <div className={classes.actions}>{actions}</div>
      </div>
    </div>
  );
};

export default ShopItem;
