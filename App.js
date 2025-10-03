import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [enteredGoal, setEnteredGoal] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  function startAddGoalHandler() {
    setModalVisible(true)
  }
  function endAddGoalHandler() {
    setModalVisible(false)
  }
  function goalHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
  
  function addGoal() {
    setGoals(prev => [...prev, {
      goal: enteredGoal,
      id: Math.random().toString()
    }])
    endAddGoalHandler()
  
    setEnteredGoal("")
  }
  function deleteGoalHandler(id) {
    setGoals(prev => {
      return prev.filter((goal) => goal.id !== id)
    })
  }
  return (
<View style={styles.appContainer}>
  <Button title="Add New Goal" color="rgba(218, 111, 111, 1)" onPress={startAddGoalHandler}/>
  <GoalInput visible={modalVisible} addGoal={addGoal} enteredGoal={enteredGoal} 
  goalHandler={goalHandler} cancelGoal={endAddGoalHandler}/>
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
    backgroundColor: '#eead44ff',
    flex: 5,
  },
  
})