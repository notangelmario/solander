import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import Notif from './components/layout/Notif'
import MainMap from './components/pages/MainMap'
import InfoPage from './components/pages/InfoPage'
import AddLocation from './components/pages/AddLocation'
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
        this.setState({auth: user})
      } else {
        this.setState({auth: undefined})
      }
    })

  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Topbar/>
          <Navbar auth={this.state.auth}/>
          <Route
            exact path='/'
            component={MainMap}
          ></Route>
          <Route
            exact path='/info'
            component={InfoPage}
          ></Route>
          <Route
            exact path='/add'
            render={() => <AddLocation auth={this.state.auth}/>}
          ></Route>
          <Notif/>
        </div>
      </BrowserRouter>
    );
  }
}