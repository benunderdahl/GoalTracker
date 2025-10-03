import { StyleSheet, TextInput, View, Button, Image } from "react-native"


function GoalInput(props) {
    
    return (
    <View style={styles.inputContainer}>
      
    <TextInput 
      style={styles.textInput} 
      placeholder="enter some text" 
      onChangeText={props.goalHandler} 
      value={props.enteredGoal} 
    />
    <Button title="Add" onPress={props.addGoal} />
  </View>
    )
}

const styles = StyleSheet.create( {
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
})

export default GoalInput 