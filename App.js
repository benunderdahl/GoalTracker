import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [enteredGoal, setEnteredGoal] = useState("")
  function goalHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
  
  function addGoal() {
    setGoals(prev => [...prev, {
      goal: enteredGoal,
      id: Math.random().toString()
    }
  ])
    setEnteredGoal("")
  }
  function deleteGoalHandler(id) {
    setGoals(prev => {
      return prev.filter((goal) => goal.id !== id)
    })
  }
  return (
<View style={styles.appContainer}>
  <GoalInput addGoal={addGoal} enteredGoal={enteredGoal} goalHandler={goalHandler}/>
  <View style={styles.goalsContainer}>
    <FlatList data={goals} renderItem={itemData => {
      return (
        <GoalItem text={itemData.item.goal} onDelete={deleteGoalHandler} id={itemData.item.id}/>
      )
    }}
    keyExtractor={item => item.id}/>
    
  </View>
</View>

  );
}


const styles = StyleSheet.create({
  appContainer: {
    
    backgroundColor: '#6FA4AF',
    padding: 50,
    paddingHorizontal: 16,
    height: '100%',
    width: '100%'
  },
  goalsContainer: {
    backgroundColor: '#F4E9D7',
    flex: 5,
  },
  
})