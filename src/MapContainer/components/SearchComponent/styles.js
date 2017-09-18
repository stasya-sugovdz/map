import { StyleSheet, Dimensions } from 'react-native';

//Font sizes:
const width = Dimensions.get('window').width;
const FONT_LG = width * 0.03;
const FONT_MD = width * 0.02;
const FONT_S = width * 0.01;

export default StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    //padding: 10
    padding: 5,
    minHeight: 70
  },
  inputTitle: {
    //fontSize: 13,
    fontSize: FONT_MD,
    paddingBottom: 10
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

