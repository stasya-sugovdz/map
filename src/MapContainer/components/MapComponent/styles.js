import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    mapContainer: {
        flex: 1
    },
    circle: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#800C0C'
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },

});
