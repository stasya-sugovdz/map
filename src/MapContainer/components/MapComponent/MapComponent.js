import React from "react";
import {
    View,
    Image
} from "react-native";
import styles from './styles';

const activeMarker = {img: require('../../../assets/images/active-marker.png')};

const MapView = require('react-native-maps');

export default function MapComponent (props) {

    const renderMarkers = ( markers, onPress, active ) => {
        return (markers.map((marker, index) => {
                return (
                    <MapView.Marker key={index}
                                    coordinate={marker.coordinate}
                                    onPress={onPress.bind(this, marker) }>
                        { (active !== marker.id) && <View style={styles.circle} /> }
                        { (active === marker.id) && <Image resizeMode='contain'
                                                           style={styles.activeMarker}
                                                           source={ activeMarker.img } />
                        }

                    </MapView.Marker>
                )
            })
        )
    };

    return (
        <MapView ref={map => this.map = map}
                 style={styles.mapContainer}
                 region={props.initialRegion}
                 showsScale={true}
                 loadingEnabled={true}
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
    activeMarker: React.PropTypes.any,
    onMarkerPress:  React.PropTypes.func
};