import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [goals, setGoals] = useState([])
  function goalHandler(enteredText) {
    setEnteredGoal(enteredText)
  }
  function addGoal() {
    setGoals(prev => [...prev, enteredGoal])
    setEnteredGoal("")
  }
  return (
<View style={styles.appContainer}>
  <View style={styles.inputContainer}>
    <TextInput 
      style={styles.textInput} 
      placeholder="enter some text" 
      onChangeText={goalHandler} 
      value={enteredGoal} 
    />
    <Button title="Add" onPress={addGoal} />
  </View>
  <View style={styles.goalsContainer}>
    <FlatList data={goals} renderItem={item => {
      return (
        <View key={item.index} style={styles.goalItem}>
          <Text style={{color: "white"}}>{item.item}</Text>
        </View>
      )
    }}/>
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
  inputContainer: {
    backgroundColor: '#B8C4A9',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: '#23C4A4',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    backgroundColor: '#F4E9D7',
    flex: 5,
  },
  goalItem: {
    padding: 6, 
    backgroundColor: '#D97D55',
    borderWidth: 2,
    borderRadius: 4,
    margin: 4,
  }
})