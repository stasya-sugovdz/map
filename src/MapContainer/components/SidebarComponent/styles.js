import { StyleSheet, Dimensions } from 'react-native';

//Font sizes:
const width = Dimensions.get('window').width;
const FONT_MD = width * 0.02;

export default StyleSheet.create({

  itemsContainer: {

  },
  itemWrapper: {
    padding: 5,
    borderColor: '#bbb',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderWidth: 1
  },
  itemTitle: {
    //fontSize: 14,
    fontSize: FONT_MD,
    fontWeight: 'bold',
    color: '#000'
  },
  itemDescription: {
    //fontSize: 12,
    fontSize: FONT_MD,
    fontWeight: 'normal',
    color: '#000'
  },
  activeItem: {
    borderColor: '#007AFF',
    borderTopColor: '#007AFF'
  },
  activeTitle: {
    color: '#007AFF'
  },
  noResults: {
    fontSize: FONT_MD,
    paddingLeft: 5,
    paddingTop: 5
  }
});

