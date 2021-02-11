import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('');
  const [text1, setText1] = React.useState('');
  const [result, setResult] = React.useState('');
  const [dataItem, setDataItem] = React.useState('');
  const [data, setData] = React.useState([]);

  const addNumbers = () => {
    setResult((parseInt(text) + parseInt(text1)));
    buttonPressed(text + " + " + text1 + " = " + result);
    setText('');
    setText1('');
  }
  const subNumbers = () => {
    setResult(parseInt(text) - parseInt(text1));
    buttonPressed(text + " - " + text1 + " = " + result);
    setText('');
    setText1('');
  }

  const buttonPressed = (item) => {
    setDataItem(item);
    setData([...data, {key:dataItem}]);
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
      
      <Button onPress={addNumbers} title="+" /> 
      <Button onPress={subNumbers} title="-" />
      
      
        <Text>History</Text>
        <FlatList
          data={data}
          renderItem={({item}) => 
          <Text>{item.key}</Text>}
        />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
