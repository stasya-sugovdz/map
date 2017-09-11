import React, { Component } from "react";
import {
    View, ScrollView, Text
} from "react-native";

import styles from './styles';
import MapComponent from './components/MapComponent/MapComponent';
import SidebarContainer from "./components/SidebarContainer/SidebarContainer";

export default class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            ]
        }
    }

    render() {
        return (
           <View style={styles.container}>
               <View style={styles.sidebar}>
                 <SidebarContainer items={this.state.markers} />
               </View>
              <MapComponent markers={this.state.markers} />
           </View>
        );
    }
}

