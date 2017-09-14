import React, { Component } from "react";
import {
  View,
  Dimensions
} from "react-native";

import styles from './styles';
import SearchComponent from './components/SearchComponent/SearchComponent';
import MapComponent from './components/MapComponent/MapComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

const { width, height } = Dimensions.get("window");

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;

const LATTITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;

export default class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialRegion: null,
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

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( position => {
      const lat = parseFloat(position.coords.latitude);
      const long = parseFloat(position.coords.longitude);

      const initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATTITUDE_DELTA,
        longitudeDelta: LONGTITUDE_DELTA
      };

      this.setState({ initialRegion: initialRegion })
    }, (error) => console.log(error))
  };

  onMarkerPress = (marker, e) => {
    this.setState({ activeMarker: marker.id });
  };

  onItemPress = (item, e) => {
    this.setState({ activeMarker: item.id });
  };


  render() {
    return (
      <View style={styles.mapHolder}>

        <View style={styles.sidebar}>
          <SearchComponent onChange={ (text) => { console.log(text) }} />
          <SidebarComponent items={ this.state.markers }
                            onItemPress={ this.onItemPress }
                            activeItem={ +this.state.activeMarker } />
        </View>

        <MapComponent initialRegion={this.state.initialRegion}
                      markers={this.state.markers}
                      onMarkerPress={ this.onMarkerPress }
                      activeMarker={ +this.state.activeMarker } />
      </View>
    );
  }
}


