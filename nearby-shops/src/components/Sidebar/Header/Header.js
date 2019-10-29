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
  const [modal, setModal] = useState(props.token === "");
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

  return (
    <div className={classes.container}>
      <IconButton
        onClick={() =>
          props.token !== ""
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
          props.token !== ""
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
        color={props.token !== "" ? "primary" : "default"}
        onClick={() =>
          props.token === ""
            ? props.dispatch(setModalVisabilty(true))
            : props.dispatch(setToken(""))
        }
      >
        {props.token !== "" ? (
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
