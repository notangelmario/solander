import React from 'react'
import { Map, Marker, Popup, Circle } from 'react-leaflet'
import MapBoxGLLayer from '../engine/MapBoxGLLayer'
import LocateControl from '../engine/LocateControl'
import L from 'leaflet'
import icons from '../icons.module.css'
import Grow from '@material-ui/core/Grow'
import CircularProgress from '@material-ui/core/CircularProgress'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default class MainMap extends React.Component {
    state = {
        loading: true,
        lat: 44.443227,
        lng: 25.878439,
        markers: [],
        icons: {
	    	'iconWarn1': [L.divIcon({ className: icons.iconWarn1, iconSize: 24 }), '#ffd600'],
		    'iconWarn2': [L.divIcon({ className: icons.iconWarn2, iconSize: 24 }), '#ff6d00'],
    		'iconWarn3': [L.divIcon({ className: icons.iconWarn3, iconSize: 24 }), '#d50000'],
	    	'iconRestricted': [L.divIcon({ className: icons.iconRestricted, iconSize: 24 }), '#d50000'],
            'iconMeeting': [L.divIcon({ className: icons.iconMeeting, iconSize: 24 }), '#00c652'],
            'iconUser': [L.divIcon({ className: icons.iconUser, iconSize: 24 }), '#2196f3'],
    		'iconInterest': [L.divIcon({ className: icons.iconInterest, iconSize: 24 }), '#673ab7'],
	    }
    }

    grabMarkers = () => {
        firebase.firestore().collection('markers').get().then(async (snap) => {
            snap.forEach((marker) => {
                this.state.markers.push({
                    position: marker.data().position,
                    icon: this.state.icons[marker.data().icon][0],
                    color: this.state.icons[marker.data().icon][1],
                    popupText: marker.data().popupText,
                    radius: marker.data().radius
                })
            })
        }).then(() => this.setState({loading: false}))
    }

    componentDidMount() {
        this.grabMarkers()
    }

    render() {
        if(!this.state.loading) {
            return(
                <Grow in={!this.state.loading}>
                <Map
                    style={mapStyle}
                    center={[this.state.lat, this.state.lng]}
                    minZoom={14}
                    maxZoom={20}
                    zoomControl={false}
                    attributionControl= {false}
                    maxBounds = {L.latLngBounds(
                        L.latLng(44.466927, 25.905418),
                        L.latLng(44.425751, 25.83787)
                    )}
                    zoom={15}>
                    
                    <MapBoxGLLayer/>
                    {
                        this.state.markers.map((content, idx) => (
                            <React.Fragment key={`MarkerContain-${idx}`}>
                                <Marker
                                    key={`marker-${idx}`}
                                    icon={content.icon}
                                    position={content.position}
                                >
                                    <Popup
                                    key={`popup-${idx}`}
                                    closeButton={false}
                                    className={icons.popup}
                                    >
                                    <span>{content.popupText}</span>
                                    </Popup>
                                </Marker>
                                {content["radius"] && (
                                    <Circle
                                    key={`circle-${idx}`}
                                    center={content.position}
                                    radius={content.radius}
                                    color={content.color}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    <LocateControl options = {
                    {
                        position: 'topright',
                        showPopup: false,
                        flyTo: true,
                        onLocationError: ()=>alert('Accesul la locatie a fost refuzat. Pentru a iti arata locatia, activeaza serviciile'),
                        onLocationOutsideMapBounds: ()=>alert('Solander este disponibil doar in Ciorogarla momentan. Poti continua sa vezi harta, totusi'),
                    }
                    }/>
                    </Map>
                </Grow>
            )
        } else {
            return(
                <CircularProgress thickness={5} size={128} style={loadingStyle}/>
            )
        }
    }
}

const loadingStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-64px',
    marginLeft: '-64px',
}

const mapStyle = {
    height: '100vh',
    width: '100%',
    zIndex: 1,
}
