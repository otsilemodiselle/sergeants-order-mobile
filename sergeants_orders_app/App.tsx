import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, FlatList, Image }from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {

  const [foodList, setFoodList] = useState([])

  const endpointURL = "https://67dc7d76e00db03c406839c3.mockapi.io/food"

  const getListOfFood = async() => {
    
    try{
      const response = await axios.get(endpointURL)
      console.log(JSON.stringify(response.data, null,))
      setFoodList(response.data)
    } 
    catch(error)
    {
      console.error("Error fetching food list:", error)
    }}

    console.log("===========================foodList===========================")
    console.log(foodList)
    console.log("==============================================================")
    

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto"/>
      <Button 
        title="Get List of Food" 
        onPress={getListOfFood}
      />
      <FlatList
        data={foodList}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> 
          <View>
            <Text>{item.dish_name}</Text>
            <Text>{item.dish_price}</Text>
            <Image 
              style={{
                height:150,
                width:150
              }}
              source={{uri: item.dish_image}}
            />
          </View>
        }
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