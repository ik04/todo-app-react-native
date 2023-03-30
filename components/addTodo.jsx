import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ handleSubmit }) {
  const [todo, setTodo] = useState();
  const changeHandler = (val) => {
    setTodo(val);
  };
  const clearSubmit = (val) => {
    handleSubmit(val);
    setTodo("");
    console.log(todo);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a Todo..."
        placeholderTextColor="white"
        onChangeText={changeHandler}
        value={todo}
      />
      <Button
        onPress={() => clearSubmit(todo)}
        title="Add Task"
        color={"purple"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
