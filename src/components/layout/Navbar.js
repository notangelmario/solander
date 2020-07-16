import React from 'react'
import NavbarButton from './NavbarButton'
import LoginPrompt from './LoginPrompt'
import styles from '../style.module.css'
import { ReactComponent as Home } from '../assets/icons/home.svg'
import { ReactComponent as Info } from '../assets/icons/info.svg'
import { ReactComponent as Account  } from '../assets/icons/account.svg'
import { ReactComponent as Theme } from '../assets/icons/theme.svg'
import { ReactComponent as AddLocation } from '../assets/icons/addLocation.svg'

export default function Navbar(props) {
	const [loginPrompt, setLoginPrompt] = React.useState(false)

	return(
    	<div className={[styles.navbar, 'e-section round-up'].join(' ')}>
			<NavbarButton type='home'>
				<Home></Home>
				<p>Hartă</p>
			</NavbarButton>
			<NavbarButton type='info'>
				<Info></Info>
				<p>Info</p>
			</NavbarButton>
			<NavbarButton type='account' loginPrompt={setLoginPrompt}>
				{props.auth !== undefined ? (
					<img src={props.auth.photoURL} referrerpolicy="no-referrer" alt=''/>
				) : (
					<Account></Account>
				 	)
				}
				<p>Cont</p>
			</NavbarButton>
			<NavbarButton type='add'>
				<AddLocation></AddLocation>
				<p>Adaugă</p>
			</NavbarButton>
			<NavbarButton type='theme'>
				<Theme></Theme>
				<p>Temă</p>
			</NavbarButton>
			<LoginPrompt show={loginPrompt} setShow={setLoginPrompt} auth={props.auth}></LoginPrompt>
		</div>
	)
}