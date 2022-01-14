import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,Button,TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';



export default function App  ({navigation})  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 
  const getnews = async () => {
     try {
      const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-14&sortBy=publishedAt&apiKey=eb376a3e6f804212bce58599ba58b7d2');
      const json = await response.json();
      setData(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getnews();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 50 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList data={data} keyExtractor={({ id }, index) => id} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('News Api', item)} >
            <View style={{marginTop: 10, paddingBottom:20}}>
            <Text style={{ fontSize: 20}}>{item.title}, </Text>
            <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>  
          )}
        />
      )}
    </View>
  );
};