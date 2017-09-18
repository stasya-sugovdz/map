import { StyleSheet, Dimensions } from 'react-native';

//Font sizes:
const width = Dimensions.get('window').width;
const FONT_LG = width * 0.03;
const FONT_MD = width * 0.02;
const FONT_S = width * 0.015;

export default StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    padding: 5,
    minHeight: 65
  },
  inputTitle: {
    //fontSize: 13,
    fontSize: FONT_S,
    lineHeight: FONT_S * 2
  },
  inputSearch: {
    height: 30,
    borderColor: '#bbb',
    borderWidth: 1,
    padding: 5,
    fontSize: FONT_LG
  },
  errorText: {
    fontSize: FONT_S,
    color: 'red'
  }
});

