import React from 'react';

import classes from "./Sidebar.css";
import Header from './Header/Header';
import Shops from './Shops/Shops';

const Sidebar = (props) => {
    return (<div className={classes.container}>
        <Header />
        <Shops />
    </div>);
}

export default Sidebar;