import React from 'react'

export default class Button extends React.Component {
    render() {
        if(this.props.type === 'a') {
            return <a href={this.props.href} className={['e-button', this.props.classes].join(" ")}>{this.props.children}</a>
        }
        else {
            return <button onClick={this.props.function} className={['e-button', this.props.classes].join(" ")}>{this.props.children}</button>
        }
    }
}