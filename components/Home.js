import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { styles } from "./Styles";
import TodoForm from "./Form/TodoForm";
import { CheckBox } from "react-native";
import firebase from "firebase";
export default function Home({ navigation }) {
  function signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Landing");
      })
      .catch((err) => {
        Alert.alert("There is something wrong!", err.message);
      });
  }

  const [enteredTodoInput, setEnteredTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function enteredTodoInputHandler(enteredTodo) {
    if (!enteredTodo) return;
    setEnteredTodoInput(enteredTodo);
  }

  function addTodoHandler() {
    const newTodo = {
      id: Math.random().toString(12),
      name: enteredTodoInput,
      priority: 0,
    };

    setTodos((prevTodos) => {
      let updatedTodos = [...prevTodos, newTodo];

      updatedTodos.sort((a, b) => a.priority > b.priority);
      return updatedTodos;
    });
  }
  function completeTodoHandler(id) {
    setTodos((prevTodos) => {
      let completedTodos = prevTodos.map((todo) => {
        if (todo.id === id) todo.priority = 1;
        return todo;
      });

      completedTodos = completedTodos.sort((a, b) => {
        return a.priority > b.priority;
      });

      return [...completedTodos];
    });
  }

  // Creating Todo Lists
  const todosElement = todos.map((todo) => (
    <View key={todo.id} style={styles.todo}>
      <CheckBox
        value={todo.priority === 1}
        onValueChange={() => completeTodoHandler(todo.id)}
      />
      <Text style={todo.priority === 1 && styles.isTodoComplete}>
        {todo.name}
      </Text>
    </View>
  ));

  return (
    <View style={styles.screen}>
      <TodoForm
        onInputChange={enteredTodoInputHandler}
        onAddTodo={addTodoHandler}
        onSignOut={signOutUser}
      />
      <ScrollView style={styles.todoContainer}>{todosElement}</ScrollView>;
    </View>
  );
}

// BELOW CODE NOT WORKING

// //import { StatusBar } from "expo-status-bar";
// import React, { useEffect, useState } from "react";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   ScrollView,
// } from "react-native";
// import { styles } from "./Styles";
// import TodoForm from "./Form/TodoForm";
// import { CheckBox } from "react-native";
// import firebase from "firebase";
// export default function Home({ navigation }) {
//   function signOutUser() {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         navigation.navigate("Landing");
//       })
//       .catch((err) => {
//         Alert.alert("There is something wrong!", err.message);
//       });
//   }

//   function addTodoToDatabase(name, id, priority) {
//     firebase
//       .firestore()
//       .collection("todos")
//       .doc(firebase.auth().currentUser.uid)
//       .collection("userTodos")
//       .add({
//         id,
//         name,
//         priority,
//       })
//       .then(function () {
//         navigation.popToTop();
//       });
//   }

//   function fetchTodos() {
//     let userTodos;
//     firebase
//       .firestore()
//       .collection("todos")
//       .doc(firebase.auth().currentUser.uid)
//       .collection("userTodos")
//       .orderBy("priority", "asc")
//       .get()
//       .then((snapshot) => {
//         userTodos = snapshot.docs.map((doc) => {
//           const data = doc.data();
//           const id = doc.id;

//           return {
//             id,
//             ...data,
//           };
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     return userTodos;
//   }

//   const [enteredTodoInput, setEnteredTodoInput] = useState("");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setTodos(fetchTodos);
//   }, [todos]);

//   function enteredTodoInputHandler(enteredTodo) {
//     if (!enteredTodo) return;
//     setEnteredTodoInput(enteredTodo);
//   }

//   function addTodoHandler() {
//     const newTodo = {
//       id: Math.random().toString(12),
//       name: enteredTodoInput,
//       priority: 0,
//     };

//     addTodoToDatabase(newTodo.name, newTodo.id, newTodo.priority);

//     setTodos((prevTodos) => {
//       let updatedTodos = [...prevTodos, newTodo];

//       updatedTodos.sort((a, b) => a.priority > b.priority);

//       return updatedTodos;
//     });
//   }
//   function completeTodoHandler(id) {
//     setTodos((prevTodos) => {
//       let completedTodos = prevTodos.map((todo) => {
//         if (todo.id === id) return { ...todo, priority: 1 };

//         return todo;
//       });

//       completedTodos = completedTodos.sort((a, b) => {
//         return a.priority > b.priority;
//       });

//       return [...completedTodos];
//     });
//   }

//   // Creating Todo Lists
//   const todosElement = todos.map((todo) => (
//     <View key={todo.id} style={styles.todo}>
//       <CheckBox
//         value={todo.priority === 1}
//         onValueChange={() => completeTodoHandler(todo.id)}
//       />
//       <Text style={todo.priority === 1 && styles.isTodoComplete}>
//         {todo.name}
//       </Text>
//     </View>
//   ));

//   return (
//     <View style={styles.screen}>
//       <TodoForm
//         onInputChange={enteredTodoInputHandler}
//         onAddTodo={addTodoHandler}
//         onSignOut={signOutUser}
//       />
//       <ScrollView style={styles.todoContainer}>{todosElement}</ScrollView>;
//     </View>
//   );
// }
