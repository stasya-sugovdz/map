import React, { Component } from "react";
import {
    View
} from "react-native";

import styles from './styles';
const MapView = require('react-native-maps');

export default class MapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 45.52220671242907,
                longitude: -122.6653281029795,
                latitudeDelta: 0.04864195044303443,
                longitudeDelta: 0.040142817690068,
            }
        }
    }

    renderMarkers = () => {
        return (this.props.markers.map((marker, index) => {
                return (
                    <MapView.Marker key={index} coordinate={marker.coordinate} >
                        <View style={styles.circle} />
                    </MapView.Marker>
                )
            })
        )
    };


    render() {
        return (
            <MapView ref={map => this.map = map}
                     style={styles.mapContainer}
                     initialRegion={this.state.region}
            >
                { this.renderMarkers() }
            </MapView>
        );
    }
}

MapComponent.propTypes = {
    markers: React.PropTypes.array
};