import React from 'react';

import { connect } from "react-redux";

import classes from "./Shops.css";
import ShopItem from './ShopItem/ShopItem';
import { setSelected, clear } from '../../../actions/shops.action';


const Shops = (props) => {

    return (<div className={classes.container}>
        <h3>216 Shops around you</h3>
        {props.shops.map((d, i) => <React.Fragment key={i}>
            <ShopItem img={d.img} name={d.name}
                onHover={() => props.dispatch(setSelected(d.id))}
                onBlur={() => props.dispatch(clear())} /> <br />
        </React.Fragment>)}
        <br />

    </div>);
}

const mapStateToProps = state => {
    return {
        shops: [...state.shops]
    }
}
export default connect(mapStateToProps)(Shops);