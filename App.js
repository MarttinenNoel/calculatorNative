import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('');
  const [text1, setText1] = React.useState('');
  const [result, setResult] = React.useState('');

  const addNumbers = () => {
    setResult((parseInt(text) + parseInt(text1)));
  }
  const subNumbers = () => {
    setResult(parseInt(text) - parseInt(text1));
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
      keyboardType={"numeric"}
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
      />
      <TextInput
      keyboardType={"numeric"}
      style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text1 => setText1(text1)}
      value={text1}
      />
      <View style={{flex: 0, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around'}}>
      <Button onPress={addNumbers} title="+" /> 
      <Button onPress={subNumbers} title="-" />
      </View>
      <StatusBar style="auto" />
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
