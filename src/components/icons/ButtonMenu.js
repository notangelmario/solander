import React from 'react'
import icons from '../icons.module.css'

export default class ButtonMenu extends React.Component {
    render(){
        return(
            <div onClick={() => this.props.toggleSidebar()} className={icons.buttonMenu}>
                <div className={this.props.sidebarOpen ? icons.buttonMenuAnim : ''}></div>
            </div>
        )
    }
}