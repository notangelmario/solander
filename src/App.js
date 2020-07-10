import React from 'react';
import Topbar from './components/layout/Topbar'
import Sidebar from './components/layout/Sidebar'
import MainMap from './components/pages/MainMap'

export default class App extends React.Component {
  state = {
    sidebarOpen: false
  }

  toggleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }

  render(){
    return (
      <div className="App">
        <Topbar toggleSidebar={this.toggleSidebar} sidebarOpen={this.state.sidebarOpen}></Topbar>
        <Sidebar sidebarOpen={this.state.sidebarOpen}></Sidebar>
        <MainMap></MainMap>
      </div>
    );
  }
}