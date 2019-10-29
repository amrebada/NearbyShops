import React, { useState, useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";

import { connect } from "react-redux";

import classes from "./Map.css";
import logo from "../../assets/logo.svg";

import { Map, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { Icon, DivIcon } from "leaflet";

import {
  Navigation,
  KeyboardArrowLeft,
  KeyboardArrowUp,
  KeyboardArrowRight,
  KeyboardArrowDown
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const MapContainer = props => {
  const icon = new DivIcon({
    html: `<div class="${classes.iconMarker}" ></div>`,
    className: classes.DivIcon
  });

  const activeicon = new DivIcon({
    html: `<div class="${classes.iconMarker} ${classes.selected}" ></div>`,
    className: classes.DivIcon
  });

  const hereIcon = new DivIcon({
    html: `<div class=${classes.iconHere}>
        ${ReactDOMServer.renderToString(<Navigation />)}
        </div>`,
    className: classes.DivIcon
  });
  const [location, setLocation] = useState([25.204849, 55.270782]);

  const move = direction => {
    switch (direction) {
      case 1:
        setLocation(prev => {
          return [prev[0], prev[1] - 0.010011];
        });
        break;
      case 2:
        setLocation(prev => {
          return [prev[0] + 0.010011, prev[1]];
        });
        break;
      case 3:
        setLocation(prev => {
          return [prev[0], prev[1] + 0.010011];
        });
        break;
      case 4:
        setLocation(prev => {
          return [prev[0] - 0.010011, prev[1]];
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.container}>
      <Map
        style={{ height: "100%" }}
        center={location}
        zoom={15}
        zoomControl={false}
        animate
      >
        <TileLayer
          attribution="Souq Al Mal"
          url="http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
        />
        {props.shops.map(shop =>
          props.mode === shop.mode ? (
            <Marker
              key={shop.id}
              icon={shop.selected ? activeicon : icon}
              position={shop.location}
            ></Marker>
          ) : null
        )}
        <Marker icon={hereIcon} position={[25.204849, 55.270782]}></Marker>
      </Map>
      <div className={classes.shadow}>
        <img
          className={classes.logo}
          src={logo}
          width="20%"
          onClick={() => setLocation([25.204849, 55.270782])}
        />
        <div className={classes.direction}>
          <IconButton
            color="secondary"
            className={classes.left}
            onClick={() => move(1)}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.up}
            onClick={() => move(2)}
          >
            <KeyboardArrowUp />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.right}
            onClick={() => move(3)}
          >
            <KeyboardArrowRight />
          </IconButton>
          <IconButton
            color="secondary"
            className={classes.down}
            onClick={() => move(4)}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    shops: [...state.shops],
    mode: state.mode
  };
};
export default connect(mapStateToProps)(MapContainer);
