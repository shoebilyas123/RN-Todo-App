import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 25,
    flex: 1,
  },
  addFormContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "space-between",
  },
  authContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  todoInput: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingTop: 5,
    margin: 5,
    borderColor: "rgb(145, 145, 145)",
    borderWidth: 2,
  },
  todoContainer: {
    flexDirection: "column",
    flex: 1,
    // justifyContent: "center",
  },
  todo: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingTop: 5,
    borderColor: "rgb(145, 145, 145)",
    borderWidth: 2,
    margin: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  todoComplete: {
    textDecorationLine: "line-through",
  },
  landingPage: {
    flex: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  titleContainer: {
    padding: 5,
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    margin: 15,
  },
  inlineText: {
    // fontSize: 3,
    marginTop: 25,
  },
  buttonText: {
    backgroundColor: "#252550",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 15,
    padding: 5,
    borderRadius: 5,
    justifyContent: "center",
    width: "fit-content",
    margin: 5,
  },
  buttonSignIn: {
    backgroundColor: "#252525",
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 15,
    padding: 5,
    margin: 5,

    borderRadius: 5,
    justifyContent: "center",
  },
  inputText: {
    padding: 5,
    margin: 7,
  },
});