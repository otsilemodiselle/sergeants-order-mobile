import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, FlatList, Image, Alert }from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {

  const [foodList, setFoodList] = useState([])

  const endpointURL = "https://67dc7d76e00db03c406839c3.mockapi.io/food"

  const getListOfFood = async() => {
    
    try{
      const response = await axios.get(endpointURL)
      console.log(JSON.stringify(response.data, null, 3))
      setFoodList(response.data)
    } 
    catch(error)
    {
      console.error("Error fetching food list:", error)
    }
  }

  const getFoodByID = async() => {
    try{
      console.log("function started")
      const response = await axios.get(endpointURL + "/4")
    console.log(JSON.stringify(response.data, null, 3));
    }
    catch(error)
    {
      console.error("Error fetching food item:", error)
    }
  }

  const deleteFoodByID = async() =>{
    try{
      const response = await axios.delete(endpointURL+"/31")
      Alert.alert("Food item was successfully deleted")
    }
    catch(error)
    {
      console.error("Could not delete item", error)
    }
  }

  const test = () => console.log("button pressed")

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto"/>
      <Button 
        title="Get Food by ID" 
        onPress={getFoodByID}
      />
      <Button 
        title="Delete Food by ID" 
        onPress={deleteFoodByID}
      />
      <FlatList
        style={styles.list}
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
  },
  list: {
    // marginTop: 500
  }
})