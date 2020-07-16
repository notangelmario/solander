import React from 'react'
import ee from 'event-emitter'
import styles from '../style.module.css'

const emitter = new ee()

export const notify = (msg) => {
    emitter.emit('notification', msg)
}

export default class Notif extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top: -256,
            msg: '',
            show: false
        }
        
        this.timeout = null

        emitter.on('notification', (msg) => {
            if(!this.state.show){
                this.setState({
                    top: 0,
                    msg: msg,
                    show: true
                })
                this.timeout = setTimeout(() => {
                    this.setState({
                        top: -256,
                        show: false
                    })
                }, 3000)
            }
        })
    }

    render() {
        return <span style={{top: `${this.state.top}px`}} className={styles.notif}>{this.state.msg}</span>
    }
}