import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

import Todo from './Todo';

interface TodoItem {
  id: number;
  text: string;
  is_toggled: boolean;
}

const TodoList: React.FC = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleCreateTodo = useCallback(async () => {
    setTodos(current => [...current, { text: newTodo, is_toggled: false }]);

    setNewTodo('');
  }, [newTodo]);

  const handleToggleTodo = useCallback(async (index: number) => {
    setTodos(current =>
      current.map((todo, i) => {
        return index === i ? { ...todo, is_toggled: !todo.is_toggled } : todo;
      }),
    );
  }, []);

  const handleDeleteTodo = useCallback(async (index: number) => {
    setTodos(current => current.filter((_, i) => i !== index));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.newTodoContainer}>
        <TextInput
          style={styles.newTodoInput}
          value={newTodo}
          onChangeText={setNewTodo}
        />
        <Button title="Create" onPress={handleCreateTodo} />
      </View>

      <View style={styles.todosContainer}>
        {todos.map((todo, index) => (
          <TouchableOpacity
            onPress={() => handleToggleTodo(index)}
            onLongPress={() => handleDeleteTodo(index)}
          >
            <Todo
              key={String(index)}
              text={todo.text}
              isToggled={todo.is_toggled}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  newTodoContainer: {
    marginTop: 80,
    marginBottom: 40,
  },

  newTodoInput: {
    height: 48,
    marginBottom: 20,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',

    paddingHorizontal: 16,

    fontSize: 20,
  },

  todosContainer: {
    flex: 1,
  },
});
