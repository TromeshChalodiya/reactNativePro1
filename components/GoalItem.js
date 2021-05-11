import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItemStyles}>
        <Text style={styles.textColor}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItemStyles: {
    padding: 12,
    backgroundColor: '#a0937d',
    borderColor: '#a0937d',
    borderWidth: 1,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 4,
  },
  textColor: {
    color: 'white',
    fontSize: 19,
  },
});
