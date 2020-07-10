import React from 'react'
import styles from '../style.module.css'

export default class ProfileSection extends React.Component {
    render() {
        return(
            <div className={styles.profileSection}>
				<div style={{backgroundColor: 'lime'}}></div>
				<span>Placeholder</span>
            </div>
        )
    }
}