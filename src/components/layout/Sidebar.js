import React from 'react'
import SidebarButton from './SidebarButton'
import ProfileSection from './ProfileSection'
import styles from '../style.module.css'

export default function Sidebar() {
    return(
        <div className={[styles.sidebar, 'e-section'].join(' ')}>
			<ProfileSection></ProfileSection>
    		<SidebarButton title="Acasă"></SidebarButton>
			<SidebarButton title="Info"></SidebarButton>
			<SidebarButton title="Sign out"></SidebarButton>
			<SidebarButton title="Sign in" type="submenu">
                <p>Placehold</p>
            </SidebarButton>
		</div>
    )
}