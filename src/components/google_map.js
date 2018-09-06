import React, {Component} from 'react';
import default from 'axios';

class GoogleMap extends Component {
    componentDidMount() {
        new GoogleMap.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;