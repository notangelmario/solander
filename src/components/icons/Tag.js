import React from 'react'
import icons from '../icons.module.css'

export default class Tag extends React.Component {
    render(){
        return <span className={icons.tag}>{this.props.children}</span>
    }  
}