import React from 'react'
import Logo from '../icons/Logo'
import styles from '../style.module.css'

export default class Topbar extends React.Component {
    render(){
        return(
        <div className={[styles.topbar, "e-section round-down"].join(' ')}>
        <Logo></Logo>
        </div>
        )
    }
}