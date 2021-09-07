import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import apiKeys from "./config/keys";

import HomeScreen from "./components/Home";
import LoginScreen from "./components/auth/Login";
import RegisterScreen from "./components/auth/Register";
import LandingScreen from "./components/auth/Landing";
import { useState, useEffect } from "react";
if (!firebase.apps.length) {
  console.log("Connected with Firebase");
  firebase.initializeApp(apiKeys.firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // console.log(user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
  let initRouteName;
  isLoggedIn ? (initRouteName = "Home") : (initRouteName = "Landing");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initRouteName}>
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return <HomeScreen />;
}
