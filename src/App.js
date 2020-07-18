import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter, Route } from 'react-router-dom'
import TopBar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import InfoPage from './components/pages/InfoPage'
import MainMap from './components/pages/MainMap'
// import Notif from './components/layout/Notif'
// import AddLocation from './components/pages/AddLocation'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function App() {
  const [auth, setAuth] = React.useState(undefined)
  const [appTheme, setAppTheme] = React.useState('dark')

  const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#5c6bc0',
          light: '#8e99f3',
          dark: '#26418f',
        },
        type: appTheme
      }
    })

  React.useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      user ? setAuth(user) : setAuth(undefined)
    })

    document.body.className = appTheme === 'dark' ? 'dark' : ''
  }
  )
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <TopBar/>
          <Route path='/info' component={InfoPage}/>
          <Route exact path='/' component={MainMap}/>
          <Navbar setAppTheme={setAppTheme} auth={auth}/>
        </ThemeProvider>
      </BrowserRouter>
    )
}