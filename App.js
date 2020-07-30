import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';

export default function App() {


if(firebase.apps.length===0) {
  var firebaseConfig = {
    apiKey: "AIzaSyC4CSg8xmZsZ-3vzaunu6Y5H9x19H6yS_k",
    authDomain: "rn-todo-list-81080.firebaseapp.com",
    databaseURL: "https://rn-todo-list-81080.firebaseio.com",
    projectId: "rn-todo-list-81080",
    storageBucket: "rn-todo-list-81080.appspot.com",
    messagingSenderId: "376820207298",
    appId: "1:376820207298:web:40005391e95505a451755b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

  return (
    <View style={styles.container}>
      <NotesScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});