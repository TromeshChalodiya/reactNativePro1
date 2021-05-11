import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [addGoals, setAddGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoals, setenteredGoals) => {
    if (enteredGoals.length === 0) {
      return;
    }
    setAddGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoals },
    ]);
    setIsAddMode(false);
    setenteredGoals('');
  };

  const removeGoalHandler = (goalId) => {
    setAddGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const closeInputModal = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Button
          title='Add New Goal'
          onPress={() => setIsAddMode(true)}
          color='white'
        />
      </View>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={closeInputModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            children={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  addButton: {
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 0.9,
    backgroundColor: '#1477d7',
    borderColor: '#1477d7',
  },
});
