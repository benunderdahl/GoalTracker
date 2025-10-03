import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native"


function GoalInput(props) {
    
    return (
      <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image}source={require("../assets/images/dartboard.jpg")}/>
    <TextInput 
      style={styles.textInput} 
      placeholder="enter some text" 
      onChangeText={props.goalHandler} 
      value={props.enteredGoal} 
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title="Add" onPress={props.addGoal} />
      </View>
      <View style={styles.button}>
      <Button title="Cancel" onPress={props.cancelGoal} />
      </View>
    </View>
    
  </View>
  </Modal>
    )
}

const styles = StyleSheet.create( {
    inputContainer: {
    backgroundColor: '#B8C4A9',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: '#23C4A4',
    borderBottomWidth: 1,
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    margin:16,
    width: '40%'
  },
  image: {
    width: 200,
    height: 200, 
    margin: 20
  }
})

export default GoalInput 