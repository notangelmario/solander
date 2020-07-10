import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import PropTypes from "prop-types";
import {
    GridLayer,
    withLeaflet
} from "react-leaflet";

class MapBoxGLLayer extends GridLayer {
    createLeafletElement(props) {
        return L.mapboxGL(props);
    }
}
MapBoxGLLayer.propTypes = {
    accessToken: PropTypes.string.isRequired
};

MapBoxGLLayer.defaultProps = {
    style: "https://api.maptiler.com/maps/bright/style.json?key=dHtGg5pVddOvW3KK1UJZ"
};

export default withLeaflet(MapBoxGLLayer);