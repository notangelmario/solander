import React from 'react';
import Topbar from './components/layout/Topbar'
import Sidebar from './components/layout/Sidebar'

export default function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Sidebar></Sidebar>
    </div>
  );
}