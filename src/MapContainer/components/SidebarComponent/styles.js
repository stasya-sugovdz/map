import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    itemsContainer: {

    },
    itemWrapper: {
        padding: 5,
        borderColor: '#fff',
        borderBottomColor: '#bbb',
        borderWidth: 1
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
    activeItem: {
        borderColor: 'blue',
        borderBottomColor: 'blue'
    },
    activeTitle: {
        color: 'blue'
    }
});

