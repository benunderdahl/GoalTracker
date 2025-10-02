import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="enter some text" />
        <Button title="Add"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    height: '100%',
    width: '100%'
  },
  inputContainer: {
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
    flex: 5,
  }
})