import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";
console.tron.log("Carrega arquivo ./src/index.js");

export default class App extends Component {
  render() {
    console.tron.log("Entrou no render");

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Eduardo</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
