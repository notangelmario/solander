import React from 'react'

export default class Button extends React.Component {
    render() {
        return <a   href={this.props.href}
                    onClick={this.props.clickEvent}
                    className={['e-button', this.props.classes].join(" ")}>{this.props.children}
                </a>
    }
}