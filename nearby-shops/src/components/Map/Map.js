import React from 'react';
import ReactDOMServer from 'react-dom/server';

import classes from "./Map.css";

import { Map, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import { Icon, DivIcon } from "leaflet";

import { Navigation } from "@material-ui/icons";


const MapContainer = (props) => {
    const icon = new DivIcon({
        html: `<div class="${classes.iconMarker}" ></div>`,
        className: classes.DivIcon
    })

    const activeicon = new DivIcon({
        html: `<div class="${classes.iconMarker} ${classes.selected}" ></div>`,
        className: classes.DivIcon
    })

    const hereIcon = new DivIcon({
        html: `<div class=${classes.iconHere}>
        ${ ReactDOMServer.renderToString(<Navigation />)}
        </div>`,
        className: classes.DivIcon
    })

    return (<div className={classes.container}>

        <Map
            style={{ height: '100%' }}
            center={[25.204849, 55.270782]} zoom={15}
            animate>
            <TileLayer
                attribution='Souq Al Mal'
                url="http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
            />
            <Marker icon={icon} position={[25.209000, 55.270000]}></Marker>
            <Marker icon={activeicon} position={[25.201000, 55.270000]}></Marker>

            <Marker icon={hereIcon} position={[25.204849, 55.270782]}></Marker>

        </Map>
        <div className={classes.shadow}></div>
    </div>);
}

export default MapContainer;