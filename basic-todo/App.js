import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/goal-input";
import GoalItem from "./components/goal-item";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

/* Before Splitting */

// import { useState } from "react";
// import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState("");
//   const [courseGoals, setCourseGoals] = useState([]);

//   function goalInputHandler(enteredText) {
//     setEnteredGoalText(enteredText);
//   }

//   function addGoalHandler() {
//     setCourseGoals(currentCourseGoals => [
//       ...currentCourseGoals,
//       // { text: enteredGoalText, key: Math.random().toString() }, Key is auto-detectable
//       { text: enteredGoalText, id: Math.random().toString() },
//     ]);
//   }

//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
//         <Button title="Add Goal" onPress={addGoalHandler} />
//       </View>
//       <View style={styles.goalsContainer}>
//         <FlatList
//           data={courseGoals}
//           renderItem={itemData => {
//             return (
//               <View style={styles.goalItem}>
//                 <Text style={styles.goalText}>{itemData.item.text}</Text>
//               </View>
//             );
//           }}
//           keyExtractor={(item, index) => {
//             return item.id;
//           }}
//           alwaysBounceVertical={false}
//         />
//         {/*
//           *
//           * Another approach
//           * Turn your data values from primitive values like strings as we have it here,
//           * into objects that have a key property.
//           *
//           *
//           <FlatList
//              data={courseGoals}
//              alwaysBounceVertical={false}
//              renderItem={itemData => {
//                 return (
//                   <View style={styles.goalItem}>
//                     <Text style={styles.goalText}>{itemData.item.text}</Text>
//                   </View>
//             );
//           }}
//           />
//         *
//         *
//         */}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#cccccc",
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: "#cccccc",
//     width: "70%",
//     marginRight: 8,
//     padding: 8,
//   },
//   goalsContainer: {
//     flex: 5,
//   },
//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: "#5e0acc",
//   },
//   goalText: {
//     color: "white",
//   },
// });
