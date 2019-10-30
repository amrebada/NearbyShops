import React, { useState, useEffect, } from "react";
import ReactDOMServer from "react-dom/server";

import { connect } from "react-redux";

import classes from "./Map.css";
import logo from "../../assets/logo.svg";

import { Map, Marker, TileLayer } from "react-leaflet";
import { DivIcon } from "leaflet";

import {
  Navigation,
  KeyboardArrowLeft,
  KeyboardArrowUp,
  KeyboardArrowRight,
  KeyboardArrowDown
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { getShops } from "../../services/shops.service";
import { setShops } from "../../actions/shops.action";


const MapContainer = props => {
  const [center, setCenter] = useState([25.204849, 55.270782])
  const [location, setLocation] = useState([25.204849, 55.270782]);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
      setCenter([res.coords.latitude, res.coords.longitude])
      setLocation([res.coords.latitude, res.coords.longitude])
      getShops([res.coords.latitude, res.coords.longitude]).then(res => {
        if (res.data.success) {
          console.log(res.data.data);

          props.dispatch(setShops(res.data.data))
        }
      })
    }, err => {
      setTimeout(() => {
        getPosition();
      }, 3000);
    });
  }
  useEffect(() => {
    getPosition()
  }, [])

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


  const move = direction => {
    switch (direction) {
      case 1:
        setLocation(prev => {
          return [prev[0], prev[1] - 0.000911];
        });
        break;
      case 2:
        setLocation(prev => {
          return [prev[0] + 0.000911, prev[1]];
        });
        break;
      case 3:
        setLocation(prev => {
          return [prev[0], prev[1] + 0.000911];
        });
        break;
      case 4:
        setLocation(prev => {
          return [prev[0] - 0.000911, prev[1]];
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
        zoom={19}
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
              icon={shop.id === props.selected ? activeicon : icon}
              position={shop.location}
            ></Marker>
          ) : null
        )}
        <Marker icon={hereIcon} position={center}></Marker>
      </Map>
      <div className={classes.shadow}>
        <img
          className={classes.logo}
          src={logo}
          width="20%"
          onClick={() => setLocation(center)}
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
    shops: [...state.shops.shops],
    selected: state.shops.selected,
    mode: state.mode
  };
};
export default connect(mapStateToProps)(MapContainer);
