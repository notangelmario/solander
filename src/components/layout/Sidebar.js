import React from 'react'
import SidebarButton from './SidebarButton'
import ProfileSection from './ProfileSection'
import Button from './Button'
import AuthIcon from '../icons/AuthIcon'
import styles from '../style.module.css'

export default class Sidebar extends React.Component {
	render(){
		return(
        	<div className={[styles.sidebar, 'e-section'].join(' ')} style={
					this.props.sidebarOpen ? {left: "0", boxShadow: "10px 0px 10px -5px var(--e-sec-darker)"} : {left: "-256px", boxShadow: "none"}
			}>
				<ProfileSection></ProfileSection>
	    		<SidebarButton title="Acasă"></SidebarButton>
				<SidebarButton title="Info"></SidebarButton>
				<SidebarButton title="Sign out"></SidebarButton>
				<SidebarButton title="Sign in" type="submenu">
					<Button type='button' classes='wide'><AuthIcon icon="google"></AuthIcon>Sign in with Google</Button>
					<Button type='button' classes='wide'><AuthIcon icon="facebook"></AuthIcon>Sign in with Facebook</Button>
        	    </SidebarButton>
			</div>
	    )
	}
}