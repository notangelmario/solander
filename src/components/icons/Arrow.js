import React from 'react'
import icons from '../icons.module.css'

export default class Arrow extends React.Component {
    render() {
        return <div className={[icons.arrow, this.props.anim ? icons.arrowAnim : ''].join(' ')}></div>
    }
}