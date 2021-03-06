import React from "react";

import classes from "./ShopItem.css";
import { connect } from "react-redux";

import {
  LIKE,
  DISLIKE,
  updateShop,
  ALL
} from "../../../../actions/shops.action";

import { IconButton, Fab } from "@material-ui/core";
import { ThumbDown, Favorite, Delete } from "@material-ui/icons";
import { setModalVisabilty } from "../../../../actions/auth.action";

import { setMode } from "../../../../services/shops.service";
const ShopItem = props => {
  const { photo, name, mode, id } = props.shop;

  let actions = (
    <React.Fragment>
      <Fab
        variant="extended"
        color="secondary"
        onClick={
          props.token !== "" && props.token !== null
            ? async () => {
                let data = await setMode(id, DISLIKE);
                console.log(data);

                if (data.data.success) {
                  props.dispatch(updateShop(id, DISLIKE));
                }
              }
            : () => props.dispatch(setModalVisabilty(true))
        }
      >
        <ThumbDown /> &nbsp;<span>Dislike</span>
      </Fab>
      <Fab
        variant="extended"
        color="primary"
        onClick={
          props.token !== "" && props.token !== null
            ? async () => {
                let data = await setMode(id, LIKE);
                console.log(data);
                if (data.data.success) {
                  props.dispatch(updateShop(id, LIKE));
                }
              }
            : () => props.dispatch(setModalVisabilty(true))
        }
      >
        <Favorite /> &nbsp;<span>Like</span>
      </Fab>
    </React.Fragment>
  );
  if (mode === LIKE || mode === DISLIKE) {
    actions = (
      <Fab
        variant="extended"
        color="secondary"
        onClick={
          props.token !== "" && props.token !== null
            ? async () => {
                let data = await setMode(id, ALL);
                console.log(data);
                if (data.data.success) {
                  props.dispatch(updateShop(id, ALL));
                }
              }
            : () => props.dispatch(setModalVisabilty(true))
        }
      >
        <Delete /> &nbsp;<span>remove</span>
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
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className={classes.cardContent}>
        <p style={{ fontSize: "23px" }}>{name}</p>

        <div className={classes.actions}>{actions}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(ShopItem);
