import React from 'react'
import Tag from '../icons/Tag'
import ButtonMenu from '../icons/ButtonMenu'
import styles from '../style.module.css'

export default function Topbar() {
    return(
        <div className={[styles.topbar, "e-section"].join(' ')}>
            <ButtonMenu></ButtonMenu>
            <h1>Solander</h1>
            <Tag>BETA</Tag>
        </div>
    )
}