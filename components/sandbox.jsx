import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 2,
    textAlign: "center",
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
    flex: 2,
    textAlign: "center",
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
    flex: 2,
    textAlign: "center",
  },
  boxFour: {
    backgroundColor: "white",
    padding: 10,
    flex: 2,
    textAlign: "center",
  },
});
