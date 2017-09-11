import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";

import styles from './styles';
import SearchComponent from '../SearchComponent/SearchComponent';

export default class SidebarContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'search...',
            text: ''
        }
    }

    renderItems = () => {
        return (this.props.items.map((item, index) => {
                return (
                    <TouchableOpacity style={styles.itemWrapper} key={index}>
                        <Text style={styles.itemTitle} numberOfLines={1} ellipsMode='tail'>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </TouchableOpacity>
                )
            })
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <SearchComponent onChange={ (text) => { console.log(text) }} />
                <ScrollView style={styles.itemsContainer}>
                    { this.renderItems() }
                </ScrollView>
            </View>
        );
    }
}


SidebarContainer.propTypes = {
    items: React.PropTypes.array
};
