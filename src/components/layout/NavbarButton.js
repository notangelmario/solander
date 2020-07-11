import React from 'react'
import styles from '../style.module.css'

export default function NavbarButton(props) {
    return(
        <div className={styles.navbarButton}>{props.children}</div>
    )
}