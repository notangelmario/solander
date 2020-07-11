import React from 'react'
import styles from '../style.module.css'

export default class Topbar extends React.Component {
    render(){
        return(
        <div className={[styles.topbar, "e-section round-down"].join(' ')}>
        <h1>Solander</h1>
        </div>
        )
    }
}