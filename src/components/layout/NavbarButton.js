import React from 'react'
import styles from '../style.module.css'
import { useHistory } from 'react-router-dom'

export default function NavbarButton(props) {
    let history = useHistory()

    if (props.goTo) {
        return <div onClick={()=>history.push(props.goTo)}  className={styles.navbarButton}>{props.children}</div>
    }
    else if (props.themeToggle) {
        return <div onClick={
            function() {
                if(document.body.className === 'dark'){
                    document.body.className = 'light'
                } else {
                    document.body.className = 'dark'
                }
            }
        } className={styles.navbarButton}>{props.children}</div>
    } else {
        return <div className={styles.navbarButton}>{props.children}</div>
    }
}