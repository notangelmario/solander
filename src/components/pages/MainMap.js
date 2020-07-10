import React from 'react'
import { Map, Marker, Popup } from 'react-leaflet'
import MapBoxGLLayer from '../layout/MapBoxGLLayer'
import L from 'leaflet'

export default class MainMap extends React.Component {
    state = {
        lat: 44.444469,
        lng: 25.892345,
        zoom: 13,
        markers: [
            [44.444469, 25.892345],
            [44.444469, 25.893345],
        ]
    }

    render() {
        return(
           <Map
                style={mapStyle}
                center={[this.state.lat, this.state.lng]} 
                minZoom={14}
                maxZoom={20}
                maxBounds = {L.latLngBounds(
                    L.latLng(44.466927, 25.905418),
                    L.latLng(44.425751, 25.83787)
                )}
                zoom={this.state.zoom}>

                <MapBoxGLLayer/>
                {this.state.markers.map((position, idx) => 
                    <Marker key={`marker-${idx}`} position={position}>
                        <Popup>
                            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                        </Popup>
                    </Marker>
                )}
            </Map>
        )
    }
}

const mapStyle = {
    top: '3rem',
    left: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 1,
}