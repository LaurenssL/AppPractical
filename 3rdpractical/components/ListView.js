import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';



export default function ListView() {

  const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 20,
    fontSize: 30,
    height: 44,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

  const renderItem = ({item}) => (
    <Item
      Name = {item.Name}
    />
  );

  return (
    <View style={styles.container}>
        <FlatList style = {styles.item} data = {Data} renderItem = {renderItem} keyExtractor = {item => item.id} />
    </View>
  );
}

const Item = ({Name}) => (
  <View  style={{padding: 20,height: 44,fontWeight: 'bold',textAlign: 'center'}}>
    <Text>{Name}</Text>
    
  </View>
)

const Data = [
  {
    id: 1,
    Name: 'Devin',
  },
  {
    id: 2,
    Name: 'Dan',
  },
  {
    id: 3,
    Name: 'Dominic',
  },
  {
    id: 4,
    Name: 'Jackson',
  },
  {
    id: 5,
    Name: 'James',
  },
  {
    id: 6,
    Name: 'Joel',
  },
  {
    id: 7,
    Name: 'John',
  },
  {
    id: 8,
    Name: 'Jillian',
  },
  {
    id: 9,
    Name: 'Jimmy',
  },
  {
    id: 10,
    Name: 'Julie',
  }
];

