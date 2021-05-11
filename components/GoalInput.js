import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal, Text } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoals, setenteredGoals] = useState('');

  const inputTextChange = (textValue) => {
    debugger;
    console.log('===>', textValue);
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
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <Button title='CANCEL' onPress={props.onCancel} color='#1477D7' />
          </View>
          <View style={styles.addButton}>
            <Button
              title='ADD'
              onPress={() => props.onAddGoal(enteredGoals, setenteredGoals)}
              color='white'
            />
          </View>
        </View>
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
    padding: 15,
    borderColor: '#1477D7',
    borderWidth: 2,
    width: '90%',
    borderRadius: 4,
    fontSize: 20,
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  cancelButton: {
    paddingVertical: 4,
    paddingHorizontal: 25,
    borderRadius: 4,
    borderColor: '#1477D7',
    borderWidth: 2,
  },
  addButton: {
    paddingVertical: 4,
    paddingHorizontal: 25,
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: '#1477d7',
    borderColor: '#1477d7',
  },
});
