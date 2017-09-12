import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: height,
        width: width
    },

    // sidebar styles:
    sidebar: {
        width: '25%'
    },
    itemsContainer: {

    },
    itemWrapper: {
        padding: 5,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    itemDescription: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#000'
    },

    //map styles:
    mapContainer: {
        flex: 1
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
    }
});