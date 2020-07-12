import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import MainMap from './components/pages/MainMap'
import InfoPage from './components/pages/InfoPage'

export default class App extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark')
      document.body.className = 'dark'
    }
    else if (localStorage.getItem('theme') === 'dark') {
      document.body.className = 'dark'
    }
    else {
      document.body.className = 'light'
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Topbar></Topbar>
          <Navbar></Navbar>
          <Route
            exact path='/'
            component={MainMap}
          ></Route>
          <Route
            exact path='/info'
            component={InfoPage}
          ></Route>
        </div>
      </BrowserRouter>
    );
  }
}