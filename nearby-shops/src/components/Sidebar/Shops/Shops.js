import React from "react";

import { connect } from "react-redux";

import classes from "./Shops.css";
import ShopItem from "./ShopItem/ShopItem";
import { setSelected, clear } from "../../../actions/shops.action";

const Shops = props => {
    return (
        <div className={classes.container}>
            <h3>{props.shops.length} Shops around you</h3>
            {props.shops.map((d, i) =>
                props.mode === d.mode ? (
                    <React.Fragment key={i}>
                        <ShopItem
                            shop={d}
                            onHover={() => props.dispatch(setSelected(d.id))}
                            onBlur={() => props.dispatch(clear())}
                        />
                        <br />
                    </React.Fragment>
                ) : null
            )}
            <br />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        shops: [...state.shops.shops],
        selected: state.shops.selected,
        mode: state.mode
    };
};
export default connect(mapStateToProps)(Shops);
