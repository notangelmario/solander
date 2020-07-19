import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter, Route } from 'react-router-dom'
import TopBar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import InfoPage from './components/pages/InfoPage'
import MainMap from './components/pages/MainMap'
import AddLocation from './components/pages/AddLocation'
import firebase from 'firebase/app'
import 'firebase/auth'
import useMediaQuery from '@material-ui/core/useMediaQuery';


var userTheme = window.localStorage.getItem('theme')

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [auth, setAuth] = React.useState(undefined)
  const [appTheme, setAppTheme] = React.useState(userTheme ? userTheme : prefersDarkMode ? 'dark' : 'light')

  const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#985277',
          light: '#ce6a85',
          dark: '#5c374c',
          contrastText: '#ffffff'
        },
        type: appTheme
      }
    })

  React.useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      user ? setAuth(user) : setAuth(undefined)
    })

    document.body.className = appTheme === 'dark' ? 'dark' : 'light'
  }
  )
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <TopBar/>
          <Route exact path='/' component={MainMap}/>
          <Route path='/info' component={InfoPage}/>
          <Route path='/add' component={AddLocation}/>
          <Navbar setAppTheme={setAppTheme} auth={auth}/>
        </ThemeProvider>
      </BrowserRouter>
    )
}