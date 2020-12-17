import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface TodoProps {
  text: string;
  isToggled: boolean;
}

const Todo: React.FC<TodoProps> = ({ text, isToggled }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.todoText, isToggled && styles.toggled]}>{text}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    alignItems: 'center',
  },

  todoText: {
    fontSize: 24,
  },

  toggled: {
    textDecorationLine: 'line-through',
  },
});
