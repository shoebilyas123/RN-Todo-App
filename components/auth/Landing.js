import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { styles } from "../Styles";

export default function Landing({ navigation }) {
  return (
    <View style={styles.landingPage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to MyTodos App</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.inlineText}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonSignIn}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
