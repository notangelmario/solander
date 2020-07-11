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
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
						<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
					</svg>
					<p>Home</p>
				</NavbarButton>
				<NavbarButton goTo='/info'>
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-lines-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>	
					</svg>
					<p>Info</p>
				</NavbarButton>
				<NavbarButton themeToggle>
					<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
					</svg>
					<p>Theme Toggle</p>
				</NavbarButton>
			</div>
	    )
	}
}