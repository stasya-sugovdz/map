import React from "react";
import {
  View,
  Text,
  TextInput
} from "react-native";

import styles from './styles'

export default function SearchComponent(props) {

  return (
    <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>{'enter zip code'.toUpperCase()}</Text>
        <TextInput
          multiline={false}
          maxLength={10}
          style={styles.inputSearch}
          onChangeText={ val => props.onChange(val) }
        />
    </View>
  );

}


SearchComponent.propTypes = {
  onChange: React.PropTypes.func
};

// const inputValidate = if(isNaN(+props.filter)){
//   return console.log('Please, enter numbers!!!')
// } else if( props.filter.split().length ){
//
// };