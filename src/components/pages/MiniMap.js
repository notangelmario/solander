import React from 'react'
import { Map, Marker } from 'react-leaflet'
import MapBoxGLLayer from '../engine/MapBoxGLLayer'
import L from 'leaflet'
import icons from '../icons.module.css'

const mapIcons = {
	'iconWarn1': [L.divIcon({ className: icons.iconWarn1, iconSize: 24 }), '#ffd600'],
	'iconWarn2': [L.divIcon({ className: icons.iconWarn2, iconSize: 24 }), '#ff6d00'],
    'iconWarn3': [L.divIcon({ className: icons.iconWarn3, iconSize: 24 }), '#d50000'],
	'iconRestricted': [L.divIcon({ className: icons.iconRestricted, iconSize: 24 }), '#d50000'],
    'iconMeeting': [L.divIcon({ className: icons.iconMeeting, iconSize: 24 }), '#00c652'],
    'iconUser': [L.divIcon({ className: icons.iconUser, iconSize: 24 }), '#2196f3'],
	'iconInterest': [L.divIcon({ className: icons.iconInterest, iconSize: 24 }), '#673ab7'],
}

export default function MiniMap(props) {
    const [markerPos, setMarkerPos] = React.useState([44.466927, 25.905418])
    return(
        <Map
            style={props.mapStyle}
            center={props.previewOptions.new ? [44.443227, 25.878439] : props.previewOptions.position}
            minZoom={14}
            maxZoom={20}
            zoomControl={false}
            attributionControl= {false}
            maxBounds = {L.latLngBounds(
                L.latLng(44.466927, 25.905418),
                L.latLng(44.425751, 25.83787)
            )}
            zoom={props.previewOptions.new ? 15 : 18}
            onClick={(e)=>{
                setMarkerPos(e.latlng)
                props.setMarker(e.latlng)
                }}>
            <MapBoxGLLayer/>
            {!props.previewOptions.new && (
                <Marker
                    position={props.previewOptions.position}
                    icon={mapIcons[props.previewOptions.icon][0]}>
                </Marker>
            )}
            {props.previewOptions.new && (
                <Marker position={markerPos}/>
            )}
        </Map>
    )
}
