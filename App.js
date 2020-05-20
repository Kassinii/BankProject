import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainView from "./src/screens/Main/views/MainView";

export default function App() {
  return (
    <MainView/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#442fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
