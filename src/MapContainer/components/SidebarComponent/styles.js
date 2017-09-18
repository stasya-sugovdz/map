import { StyleSheet, Dimensions } from 'react-native';

//Font sizes:
const width = Dimensions.get('window').width;
const FONT_MD = width * 0.02;

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
    borderColor: 'blue',
    borderBottomColor: 'blue'
  },
  activeTitle: {
    color: 'blue'
  },
  noResults: {
    fontSize: FONT_MD,
    paddingLeft: 5
  }
});

