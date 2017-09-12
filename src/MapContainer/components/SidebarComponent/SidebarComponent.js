import React from "react";
import {
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";

import styles from './styles';

export default function SidebarComponent(props) {

    const renderItems = ( items, onPress, active ) => {

        return (items.map((item, index ) => {
                return (
                    <TouchableOpacity style={[styles.itemWrapper, (active === item.id) && styles.activeItem]}
                                      key={index}
                                      onPress={ onPress.bind(this, item) }
                    >
                        <Text style={[styles.itemTitle,  (active === item.id) && styles.activeTitle ]}
                              numberOfLines={1}
                              ellipsMode='tail' >
                            {item.title}
                        </Text>
                        <Text style={styles.itemDescription}>
                            {item.description}
                        </Text>
                    </TouchableOpacity>
                )
            })
        )
    };

    return (
        <ScrollView style={styles.itemsContainer}>
            { props.items && renderItems( props.items, props.onItemPress, props.activeItem ) }
        </ScrollView>
    );
}


SidebarComponent.propTypes = {
    items: React.PropTypes.array,
    activeItem: React.PropTypes.number,
    onItemPress:  React.PropTypes.func
};
