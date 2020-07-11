import React from 'react';
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import MainMap from './components/pages/MainMap'
import Terms from './components/pages/Terms'

export default function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>
      <MainMap></MainMap>
    </div>
  );
}