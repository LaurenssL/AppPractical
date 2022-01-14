import * as React from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  published: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
  },  
});

export default function HomeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
   <Image source ={{width:'100%',height: 200,uri: route.params.urlToImage}} />
    <Text style={styles.paragraph}>Title:  </Text>
    <Text style={styles.text}> {route.params.title}</Text>
    <Text style={styles.paragraph}>Content:  </Text>
    <Text style={styles.text}> {route.params.content}</Text>
    <Text style={styles.published}> Published at: {route.params.publishedAt}</Text>
    </View>
  );
}



