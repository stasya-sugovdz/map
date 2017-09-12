import React from "react";
import {
    View,
    Image
} from "react-native";
import styles from './styles';
import activeMarker from '../../../assets/images/active-marker.png'
const MapView = require('react-native-maps');

export default function MapComponent (props) {

    const renderMarkers = ( markers, onPress, active ) => {
        return (markers.map((marker, index) => {
                return (
                    <MapView.Marker key={index}
                                    coordinate={marker.coordinate}
                                    onPress={onPress.bind(this, marker) }>
                        { (active !== marker.id) && <View style={styles.circle} /> }
                        { (active === marker.id) && <Image style={styles.activeMarker} source={require(activeMarker)} /> }

                    </MapView.Marker>
                )
            })
        )
    };

    return (
        <MapView ref={map => this.map = map}
                 style={styles.mapContainer}
                 initialRegion={props.initialRegion}
        >
            { props.markers &&
            renderMarkers(props.markers, props.onMarkerPress, props.activeMarker )
            }
        </MapView>
    );

}

MapComponent.propTypes = {
    initialRegion: React.PropTypes.object.isRequired,
    markers: React.PropTypes.array,
    activeMarker: React.PropTypes.number,
    onMarkerPress:  React.PropTypes.func
};