import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import { styles } from "../Styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    }
    if (!password) {
      Alert.alert("Password field is required.");
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert("There is something wrong!", err.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in to your account:</Text>

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>Sumbit</Text>
      </TouchableOpacity>
    </View>
  );
}
