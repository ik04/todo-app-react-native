import { View, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function AddTodo({ handleSubmit }) {
  const [todo, setTodo] = useState();
  const changeHandler = (val) => {
    setTodo(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter a Todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => handleSubmit(todo)}
        title="Add Task"
        color={"coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
