import React, { Component } from "react";
import {
    View,
    Text,
    TextInput
} from "react-native";

import styles from './styles'

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'search...',
            text: ''
        }
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>{'enter zip code'.toUpperCase()}</Text>
                <TextInput
                    style={styles.inputSearch}
                    onChangeText={(text) => this.props.onChange({text})}
                    placeholder={this.state.placeholder}
                />
            </View>
        );
    }
}


SearchComponent.propTypes = {
    onChange: React.PropTypes.func
};
