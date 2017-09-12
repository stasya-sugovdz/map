import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";
//import MapView, { Marker} from 'react-native-maps';

import styles from './styles';
import SearchComponent from './components/SearchComponent/SearchComponent';
import MapComponent from './components/MapComponent/MapComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

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
                    description: "This is the best place in Portland",
                    id: 1
                },
                {
                    coordinate: {
                        latitude: 45.524698,
                        longitude: -122.6655507,
                    },
                    title: "Second Best Place",
                    description: "This is the second best place in Portland",
                    id: 2
                },
                {
                    coordinate: {
                        latitude: 45.5230786,
                        longitude: -122.6701034,
                    },
                    title: "Third Best Place",
                    description: "This is the third best place in Portland",
                    id: 3
                },
                {
                    coordinate: {
                        latitude: 45.521016,
                        longitude: -122.6561917,
                    },
                    title: "Fourth Best Place",
                    description: "This is the fourth best place in Portland",
                    id: 4
                },
            ],
            placeholder: 'search...',
            text: '',
            activeMarker: null
        };
    }


    onMarkerPress = (marker, e) => {
        this.setState({ activeMarker: marker.id });
    };

    onItemPress = (item, e) => {
        this.setState({ activeMarker: item.id });
    };


    render() {
        return (
           <View style={styles.container}>

               <View style={styles.sidebar}>
                   <SearchComponent onChange={ (text) => { console.log(text) }} />
                   <SidebarComponent items={ this.state.markers }
                                     onItemPress={ this.onItemPress }
                                     activeItem={ +this.state.activeMarker } />
               </View>

               <MapComponent initialRegion={this.state.region}
                             markers={this.state.markers}
                             onMarkerPress={ this.onMarkerPress }
                             activeMarker={ +this.state.activeMarker } />
           </View>
        );
    }
}


