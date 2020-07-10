import React from 'react'

export default class AuthIcon extends React.Component {
    render() {
        if(this.props.icon === 'google') {
            return <div style={googleIcon}></div>
        }
        else if (this.props.icon === 'facebook') {
            return <div style={facebookIcon}></div>
        }
    }
}

const googleIcon = {
    backgroundImage: `url(${require('../assets/auth-providers/spritesheet.png')})`,
    backgroundRepeat: 'no-repeat',
    display: 'block',
    width: '16px',
    height: '16px',
    backgroundPosition: '-16px 0',
    position: 'absolute',
}
const facebookIcon = {
    backgroundImage: `url(${require('../assets/auth-providers/spritesheet.png')})`,
    backgroundRepeat: 'no-repeat',
    display: 'block',
    width: '16px',
    height: '16px',
    backgroundPosition: '0 0',
    position: 'absolute',
}