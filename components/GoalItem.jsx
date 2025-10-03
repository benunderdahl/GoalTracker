import { StyleSheet, View, Text, Pressable
 } from "react-native"


function GoalItem(props) {
    return ( <View style={styles.goalItem}>
    <Pressable onPress={props.onDelete.bind(this, props.id)} style={styles.pressedItem}>
          <Text style={{color: "white"}}>{props.text}</Text>
        </Pressable>
        </View>
)
}

const styles = StyleSheet.create({
    goalItem: {
    padding: 6, 
    backgroundColor: '#D97D55',
    borderWidth: 2,
    borderRadius: 4,
    margin: 4,
  }, 
  pressedItem: {
    opacity: 0.5
  }
})




export default GoalItem