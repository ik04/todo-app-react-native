import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    color: "white",
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "purple",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
