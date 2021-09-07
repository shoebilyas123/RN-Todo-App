import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "../Styles";
import firebase from "firebase";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emptyState = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  function register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            email: email,
            name: name,
          });

        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert("There is something wrong!!!!", err.message);
      });
  }

  const handlePress = () => {
    if (!name) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      register();
      emptyState();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Create an account </Text>

        <ScrollView onBlur={Keyboard.dismiss}>
          <TextInput
            placeholder="Enter your name..."
            value={name}
            onChangeText={(name) => setName(name)}
          />

          <TextInput
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
