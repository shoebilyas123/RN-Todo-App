import React from "react";
import { styles } from "./../Styles";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

export default function TodoForm(props) {
  return (
    <View style={styles.addFormContainer}>
      <TextInput
        placeholder="Enter todo name..."
        onChangeText={props.onInputChange}
        style={styles.todoInput}
      />
      <TouchableOpacity onPress={props.onAddTodo}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onSignOut}>
        <Text style={styles.buttonSignIn}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
