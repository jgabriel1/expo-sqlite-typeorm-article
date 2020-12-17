import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <TodoList />
      </SafeAreaView>
    </>
  );
};

export default App;
