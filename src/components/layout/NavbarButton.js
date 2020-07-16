import React from 'react'
import styles from '../style.module.css'
import { useHistory } from 'react-router-dom'

export default function NavbarButton(props) {
    let history = useHistory()

    switch (props.type) {
        case 'home':
            return <div onClick={()=>history.push('/')}  className={styles.navbarButton}>{props.children}</div>
        case 'info':
            return <div onClick={()=>history.push('info')}  className={styles.navbarButton}>{props.children}</div>
        case 'account':
            return <div onClick={() => props.loginPrompt(true)} className={styles.navbarButton}>{props.children}</div>   
        case 'theme':
            return <div onClick={
                function() {
                    if(document.body.className === 'dark'){
                        document.body.className = 'light'
                        localStorage.setItem('theme', 'light')
                    } else {
                        document.body.className = 'dark'
                        localStorage.setItem('theme', 'dark')
                    }
                }
                } className={styles.navbarButton}>{props.children}</div>
        case 'add':
            return <div onClick={() => history.push('/add')} className={styles.navbarButton}>{props.children}</div>   
        default:
            break;
    }
}