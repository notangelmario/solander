import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import MainMap from './components/pages/MainMap'
import InfoPage from './components/pages/InfoPage'
import firebase from 'firebase/app'
import 'firebase/auth'

export default class App extends React.Component {

  state = {
    auth: undefined
  }

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
    
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        console.log(user)
        this.setState({auth: user})
      } else {
        console.log('Notauth')
        this.setState({auth: undefined})
      }
    })

  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Topbar></Topbar>
          <Navbar auth={this.state.auth}></Navbar>
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