import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default StyleSheet.create({

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
    }
});

