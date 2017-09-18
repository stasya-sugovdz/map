import React from "react";
import {
  View,
  Text,
  TextInput
} from "react-native";

import styles from './styles'

export default function SearchComponent(props) {

  const{ onChange, showError } = props;
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>{'enter zip code'.toUpperCase()}</Text>
        <TextInput
          multiline={false}
          maxLength={10}
          keyBoardType='numeric'
          style={styles.inputSearch}
          onChangeText={ val => onChange(val) }
        />
      { showError === 'isNaN' && <Text style={styles.errorText}>Please enter numbers...</Text>}
      { showError === 'aboveLimit' && <Text style={styles.errorText}>You could enter maximum 10 numbers...</Text>}
    </View>
  );

}


SearchComponent.propTypes = {
  onChange: React.PropTypes.func,
  showError: React.PropTypes.string
};

// const inputValidate = if(isNaN(+props.filter)){
//   return console.log('Please, enter numbers!!!')
// } else if( props.filter.split().length ){
//
// };