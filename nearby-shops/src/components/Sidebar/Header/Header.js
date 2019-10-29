import React from 'react';
import classes from "./Header.css";

import { Fab, IconButton, } from "@material-ui/core";
import { Person, FavoriteBorder, ThumbDown, ThumbDownOutlined } from "@material-ui/icons";

const Header = (props) => {
    return (<div className={classes.container}>
        <IconButton >
            <ThumbDownOutlined color="primary" />
        </IconButton>
        <IconButton className={classes.margin}>
            <FavoriteBorder color="secondary" />
        </IconButton>
        <Fab aria-label="profile" className={classes.profile}>
            <Person />
        </Fab>

    </div>);
}

export default Header;