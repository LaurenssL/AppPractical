import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },

  paragraph: {
    margin: 125,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Button title ="View news" onPress={()=> {navigation.navigate("List View" )} }> 
      </Button>
    </View>
  );
}
