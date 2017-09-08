import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Animated,
    Image,
    Dimensions,
} from "react-native";

import MapView from "react-native-maps";
import styles from './styles'

export default class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 45.52220671242907,
                longitude: -122.6653281029795,
                latitudeDelta: 0.04864195044303443,
                longitudeDelta: 0.040142817690068,
            },
            markers: [
                {
                    coordinate: {
                        latitude: 45.524548,
                        longitude: -122.6749817,
                    },
                    title: "Best Place",
                    description: "This is the best place in Portland"
                },
                {
                    coordinate: {
                        latitude: 45.524698,
                        longitude: -122.6655507,
                    },
                    title: "Second Best Place",
                    description: "This is the second best place in Portland"
                },
                {
                    coordinate: {
                        latitude: 45.5230786,
                        longitude: -122.6701034,
                    },
                    title: "Third Best Place",
                    description: "This is the third best place in Portland"
                },
                {
                    coordinate: {
                        latitude: 45.521016,
                        longitude: -122.6561917,
                    },
                    title: "Fourth Best Place",
                    description: "This is the fourth best place in Portland"
                },
            ]
        }
    }

    renderMarkers = () => {
        return (this.state.markers.map((marker, index) => {
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
           <View style={styles.container}>
               <View style={styles.sidebar}/>
               <MapView ref={map => this.map = map}
                        style={styles.mapContainer}
                        initialRegion={this.state.region}
               >
                   { this.renderMarkers() }
               </MapView>
           </View>
        );
    }
}

