import { StyleSheet, View, Text, Pressable
 } from "react-native"


function GoalItem(props) {
    return ( <View style={styles.goalItem}>
    <Pressable android_ripple={{color: "rgba(207, 92, 38, 0.78)"}} 
    onPress={props.onDelete.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
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