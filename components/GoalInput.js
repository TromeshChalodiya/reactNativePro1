import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoals, setenteredGoals] = useState('');

  const inputTextChange = (textValue) => {
    setenteredGoals(textValue);
  };

  return (
    <View style={styles.buttonAlignment}>
      <TextInput
        placeholder='Your Goals'
        style={styles.textInput}
        onChangeText={inputTextChange}
        value={enteredGoals}
      />
      <Button
        title='ADD'
        onPress={() => props.onAddGoal(enteredGoals, setenteredGoals)}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  buttonAlignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
  },
});
