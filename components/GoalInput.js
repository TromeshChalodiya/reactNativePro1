import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoals, setenteredGoals] = useState('');

  const inputTextChange = (textValue) => {
    setenteredGoals(textValue);
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
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
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
  },
});
