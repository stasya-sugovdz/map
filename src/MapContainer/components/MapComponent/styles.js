import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mapContainer: {
        //flex: 1
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: 'red'
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    activeMarker: {
        width: 15,
        height: 30
    }
});
