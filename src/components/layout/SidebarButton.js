import React from 'react'
import Collapse from '@kunukn/react-collapse'
import Arrow from '../icons/Arrow'
import styles from '../style.module.css'

export default class SidebarButton extends React.Component {
    state = {
        submenuOpen: false
    }
    
    getSubmenuDisplay = () => {
        return {
            height: this.state.submenuOpen ? '0px' : 'auto',
        }
    }

    render(){
        if (this.props.type === 'submenu'){
            return (
                <React.Fragment>
                    <span onClick={() => {this.setState({submenuOpen: !this.state.submenuOpen})}} className={styles.sidebarButton}>{this.props.title}<Arrow anim={this.state.submenuOpen}></Arrow></span>
                    <Collapse isOpen={this.state.submenuOpen} className={styles.submenuAnim}>
                        <div className={styles.submenu}>
                            {this.props.children}
                        </div>
                    </Collapse>
                </React.Fragment>
            )
        } else {
            return <span className={styles.sidebarButton}>{this.props.title}</span>
        }
    }
}