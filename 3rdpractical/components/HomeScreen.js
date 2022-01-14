import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

const styles = StyleSheet.create({
    counter:{
      padding: 30,
      textAlign: 'center'
    },
space: {
    width: 20,
    height: 20,
  }
    
 
  });
  
export default function HomeScreen({ navigation }) {
  const [counter, setCounter] = useState(0);

  return (

    <View style={styles.title}>
      <Text style={styles.counter}> Counter value: {counter}</Text>
      <Button
        title='Go To ListView'
        onPress={() => { navigation.navigate("List View") }}
      />
      <View style={styles.space}></View>

    <Button 
        title='+1'
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <View style={styles.space}></View>
      <Button 
        title='-1'
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      

    </View>



  );
}