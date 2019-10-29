import React from 'react';
import classes from "./Header.css";
import { connect } from "react-redux";

import { Fab, IconButton, } from "@material-ui/core";
import { Person, FavoriteBorder, ThumbDown, Favorite, ThumbDownOutlined } from "@material-ui/icons";
import { setMode, DISLIKE, ALL, LIKE } from '../../../actions/shops.action';

const Header = (props) => {
    const changeTo = (mode) => {


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
    }

    return (<div className={classes.container}>
        <IconButton onClick={() => changeTo(DISLIKE)}>
            {props.mode === DISLIKE ? <ThumbDown color="primary" /> : <ThumbDownOutlined color="primary" />}

        </IconButton>
        <IconButton className={classes.margin} onClick={() => changeTo(LIKE)}>
            {props.mode === LIKE ? <Favorite color="secondary" /> : <FavoriteBorder color="secondary" />}
        </IconButton>
        <Fab aria-label="profile" className={classes.profile}>
            <Person />
        </Fab>

    </div >);
}
const mapStateToProps = state => {
    return {
        mode: state.mode
    }
}
export default connect(mapStateToProps)(Header);