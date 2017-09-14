import React, { Component } from "react";
import {
  View, Dimensions, Text
} from "react-native";

import styles from './styles';
import SearchComponent from './components/SearchComponent/SearchComponent';
import MapComponent from './components/MapComponent/MapComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATTITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;

export default class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: null,
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
  };

  componentWillUnmount() {
    this.setState({ region: null })
  };

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( position => {

      //TODO: use lat and long variables for initialRegion latitude and longtitude to get current Geolocation
        const lat = parseFloat(position.coords.latitude); //45.52220671242907
        const long = parseFloat(position.coords.longitude); //-122.6653281029795
        const initialRegion = {
          latitude: 45.52220671242907,
          longitude: -122.6653281029795,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        };
        this.setState({ region: initialRegion })
      },
      (error) => { console.log(error) },
      { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000})
  };

  onMarkerPress = (marker) => {
    this.setState({ activeMarker: marker.id });
  };

  onItemPress = (item) => {
    let newPosition = {
      latitude: item.coordinate.latitude,
      longitude: item.coordinate.longitude,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGTITUDE_DELTA
    };

    this.setState({
      activeMarker: item.id,
      region: newPosition
    });
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

        <View style={styles.mainContainer}>
          { !this.state.region && <Text>Loading...</Text> }

          { this.state.region &&
            <MapComponent initialRegion={this.state.region}
                          markers={this.state.markers}
                          onMarkerPress={ this.onMarkerPress }
                          activeMarker={ +this.state.activeMarker } />
          }
        </View>
      </View>
    );
  }
}


