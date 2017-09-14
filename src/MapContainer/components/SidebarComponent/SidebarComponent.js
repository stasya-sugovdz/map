import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";

import styles from './styles';

export default function SidebarComponent(props) {

  const renderItems = ( items, onPress, active ) => {

    return items.filter( item => {
        return !props.filter
                || ( item.zip && ( '' + item.zip).match(props.filter))
                || ( item.postCode && ('' + item.postCode).match(props.filter))})
      .map((item, index ) => {
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
  };

  return (
    <ScrollView style={styles.itemsContainer}>
      { props.items && renderItems( props.items, props.onItemPress, props.activeItem ) }
    </ScrollView>
  );
}


SidebarComponent.propTypes = {
  items: React.PropTypes.array,
  activeItem: React.PropTypes.any,
  onItemPress:  React.PropTypes.func,
  filter: React.PropTypes.string
};
