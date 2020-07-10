import React from 'react'
import Tag from '../icons/Tag'
import ButtonMenu from '../icons/ButtonMenu'
import styles from '../style.module.css'

export default class Topbar extends React.Component {
    render(){
        return(
        <div className={[styles.topbar, "e-section"].join(' ')}>
            <ButtonMenu toggleSidebar={this.props.toggleSidebar} sidebarOpen={this.props.sidebarOpen}></ButtonMenu>
        <h1>Solander</h1>
            <Tag>BETA</Tag>
        </div>
        )
    }
}