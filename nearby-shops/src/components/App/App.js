import React from 'react';
import classes from './App.css';
import Map from '../Map/Map';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <div className={classes.App}>
      <Map />
      <Sidebar />
    </div>
  );
}

export default App;
