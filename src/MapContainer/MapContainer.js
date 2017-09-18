import React, { Component } from "react";
import {
  View, Dimensions, ActivityIndicator
} from "react-native";

import styles from './styles';
import SearchComponent from './components/SearchComponent/SearchComponent';
import MapComponent from './components/MapComponent/MapComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATTITUDE_DELTA = 0.0461; //0.0922
const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;

export default class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      region: null,
      inputValue: null,
      activeMarker: null,
      inputError: ''
    };
  }

  componentDidMount() {
    this.getCurrentPosition();
    this.setState({ markers: this.getMarkers() });
  };

  componentWillUnmount() {
    this.setState({ region: null, markers: [] })
  };

  getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition( position => {
        const lat = parseFloat(position.coords.latitude);
        const long = parseFloat(position.coords.longitude);
        const userRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        };
        this.setState({ region: userRegion })
      },
      (error) => {
        const initialRegion = {
          latitude: -33.865123,
          longitude: 151.2099,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA
        };
        this.setState({ region: initialRegion })
      },
      { enableHighAccuracy: true, timeout: 50000, maximumAge: 1000})
  };

  getMarkers = () => {
    return [
      {
        coordinate: {
          latitude: -33.865143,
          longitude: 151.2099817,
        },
        title: "Best Place",
        description: "This is the best place in Portland",
        zip: 132,
        postCode: 6854651,
        id: 1
      },
      {
        coordinate: {
          latitude: -33.865155,
          longitude: 151.2155507,
        },
        title: "Second Best Place",
        description: "This is the second best place in Portland",
        zip: '123',
        postCode: '6544',
        id: 2
      },
      {
        coordinate: {
          latitude: -33.865143,
          longitude: 151.2125336,
        },
        title: "Third Best Place",
        description: "This is the third best place in Portland",
        zip: '456',
        postCode: '78507',
        id: 3
      },
      {
        coordinate: {
          latitude: -33.865431,
          longitude: 151.19998803,
        },
        title: "Fourth Best Place",
        description: "This is the fourth best place in Portland",
        zip: '132',
        postCode: '6854651',
        id: 4
      },
    ]
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

  onChange = (val) => {
    const numbers = /\D/i;

    if( numbers.test(val)) {
      this.setState({ inputError: 'isNaN' });
    } else if( numbers.length > 10) {
      this.setState({ inputError: 'aboveLimit' });
    } else {
      this.setState({ inputValue: val, inputError: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.sidebar}>
          <SearchComponent onChange={ this.onChange } showError={this.state.inputError} />
          <SidebarComponent items={ this.state.markers }
                            onItemPress={ this.onItemPress }
                            activeItem={ +this.state.activeMarker }
                            filter={ this.state.inputValue } />
        </View>

        <View style={styles.mainContainer}>
          { !this.state.region && <ActivityIndicator size='small' /> }

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


