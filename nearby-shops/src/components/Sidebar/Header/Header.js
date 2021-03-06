import React, { useState } from "react";
import classes from "./Header.css";
import { connect } from "react-redux";

import { Fab, IconButton } from "@material-ui/core";
import {
  Person,
  FavoriteBorder,
  ThumbDown,
  Favorite,
  ThumbDownOutlined,
  ExitToApp
} from "@material-ui/icons";
import { setMode, DISLIKE, ALL, LIKE } from "../../../actions/shops.action";
import Signin from "./Signin/Signin";
import { setModalVisabilty, setToken } from "../../../actions/auth.action";

const Header = props => {
  const changeTo = mode => {
    switch (mode) {
      case props.mode:
        props.dispatch(setMode(ALL));
        break;
      case LIKE:
        props.dispatch(setMode(LIKE));
        break;
      case DISLIKE:
        props.dispatch(setMode(DISLIKE));
      default:
        break;
    }
  };

  const handleLogout = () => {
    props.dispatch(setToken(""));
    props.dispatch(setMode(ALL));
    localStorage.removeItem("token");
  };

  return (
    <div className={classes.container}>
      <IconButton
        onClick={() =>
          props.token !== "" && props.token !== null
            ? changeTo(DISLIKE)
            : props.dispatch(setModalVisabilty(true))
        }
      >
        {props.mode === DISLIKE ? (
          <ThumbDown color="primary" />
        ) : (
          <ThumbDownOutlined color="primary" />
        )}
      </IconButton>
      <IconButton
        className={classes.margin}
        onClick={
          props.token !== "" && props.token !== null
            ? () => changeTo(LIKE)
            : () => props.dispatch(setModalVisabilty(true))
        }
      >
        {props.mode === LIKE ? (
          <Favorite color="secondary" />
        ) : (
          <FavoriteBorder color="secondary" />
        )}
      </IconButton>
      <Fab
        aria-label="profile"
        className={classes.profile}
        color={
          props.token !== "" && props.token !== null ? "primary" : "default"
        }
        onClick={() =>
          props.token === "" || props.token === null
            ? props.dispatch(setModalVisabilty(true))
            : handleLogout()
        }
      >
        {props.token !== "" && props.token !== null ? (
          <ExitToApp style={{ color: "white" }} />
        ) : (
          <Person />
        )}
      </Fab>

      <Signin />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    mode: state.mode,
    token: state.auth.token
  };
};
export default connect(mapStateToProps)(Header);
