import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import {
    GridLayer,
    withLeaflet
} from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
    createLeafletElement(props) {
        return L.mapboxGL(props);
    }
}

MapBoxGLLayer.defaultProps = {
    style: "https://api.maptiler.com/maps/bright/style.json?key=dHtGg5pVddOvW3KK1UJZ"
};

export default withLeaflet(MapBoxGLLayer);