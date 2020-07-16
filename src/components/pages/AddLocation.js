import React from 'react'
import './page.css'
import { notify } from '../layout/Notif'
import { ReactComponent as AddIcon } from '../assets/icons/add.svg'
import firebase from 'firebase/app'
import 'firebase/firestore'
import icons from '../icons.module.css'
import { ReactComponent as View } from '../assets/icons/view.svg'

export default class AddLocation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markerSubs: [],
            loading: true
        }
    }
    componentDidMount() {
        firebase.firestore().collection('marker_subs').get().then(snap => {
            snap.forEach(marker_sub => {
                this.state.markerSubs.push({
                    icon: marker_sub.data().icon,
                    title: marker_sub.data().title,
                    position: marker_sub.data().position,
                    status: marker_sub.data().status,
                })
            })
        }).then(()=> this.setState({loading: false}))
    }
    
    render(){
        if (!this.state.loading) {
            return(
                <div id='page'>
                    <div className='addLocation' onClick={()=>{
                        if(!this.props.auth) {
                            notify('Trebuie sa fii logat ca sa poti adauga pe harta')
                        }
                        }}>
                        <AddIcon/>
                        <p>Adaugă locație</p>
                    </div>
                    <div className='e-separator not-wide diamond'></div>
                    {this.state.markerSubs.map((content, idx) => (
                        <div className='addSub' key={`addSub-${idx}`}>
                            <div className={icons[content.icon]} id="icon"></div>
                            <h3>{content.title}</h3>
                            <span className={content.status}></span>
                            <View className='addSubPreview'/>
                        </div>
                    ))}
                </div>
            )
        } else {
            return <div className={icons.loading}></div>
        }
    }
}