import React from 'react'
import NavbarButton from './NavbarButton'
//import ProfileSection from './ProfileSection'
//import Button from './Button'
//import AuthIcon from '../icons/AuthIcon'
import styles from '../style.module.css'
import firebase from 'firebase/app'
import 'firebase/auth'

export default class Navbar extends React.Component {
	state = {
		auth: null
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(authUser => {
			this.setState({auth: authUser})
			console.log(authUser ? 'auth' : 'notAuth')
		})
	}
	render(){
		return(
        	<div className={[styles.navbar, 'e-section round-up'].join(' ')}>
				<NavbarButton goTo='/'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
					</svg>
					<p>Hartă</p>
				</NavbarButton>
				<NavbarButton goTo='/info'>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"/>
					</svg>
					<p>Info</p>
				</NavbarButton>
				<NavbarButton>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
						<path d="M0 0h24v24H0V0z" fill="none"/>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
					</svg>
					<p>Cont</p>
				</NavbarButton>
				<NavbarButton>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" />
					</svg>
					<p>Raport</p>
				</NavbarButton>
				<NavbarButton themeToggle>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="2em">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z" />
					</svg>
					<p>Temă</p>
				</NavbarButton>
			</div>
	    )
	}
}