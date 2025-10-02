import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="enter some text" />
      <Button title="Add"/>
      </View>
      <Text>List of Goals</Text>
      <View></View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    padding: 100
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
})