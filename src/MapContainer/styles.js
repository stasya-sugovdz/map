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
    sidebar: {
        width: '25%'
    }
});