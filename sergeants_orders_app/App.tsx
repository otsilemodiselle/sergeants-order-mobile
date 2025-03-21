import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet }from 'react-native';
import axios from 'axios';
import { useEffect } from 'react';

export default function App() {

  const endpointURL = "https://67dc7d76e00db03c406839c3.mockapi.io/food"

  const getListOfFood = async() => {
    
    try{
      console.log("Button Pressed: Fetching food list...");
      const response = await axios.get(endpointURL)
      console.log(JSON.stringify(response.data, null, 3));
    } 
    catch(error)
    {
      console.error("Error fetching food list:", error)
    }}

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto"/>
      <Button 
        title="Get List of Food" 
        onPress={getListOfFood}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  }
})