import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [addGoals, setAddGoals] = useState([]);

  const addGoalHandler = (enteredGoals, setenteredGoals) => {
    setAddGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoals },
    ]);
    setenteredGoals('');
  };

  const removeGoalHandler = (goalId) => {
    setAddGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={addGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
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
});
