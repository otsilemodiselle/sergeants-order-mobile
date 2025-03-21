import axios from "axios";
import { Alert } from "react-native";
import { useState } from "react";

const [foodList, setFoodList] = useState([])
const endpointURL = "https://67dc7d76e00db03c406839c3.mockapi.io/food";

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

const getFoodByID = async() => 
{
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

const body = {
    description: "Italian style pizza with only vegetables",
    dish_name: "Vegetarian Pizza",
    dish_image: "https://loremflickr.com/640/480",
    dish_price: 110,
    category: "pizza"
}

const createFoodItem = async() => {
    try{
        const response = await axios.post(endpointURL,body)
        Alert.alert("Food item created!")
        getListOfFood()
    }
    catch(error)
    {
        console.error("Could not delete item", error)
    }
}

const updateFoodItem = async() => {
    try{
        const response = await axios.put(endpointURL+"/32",body)
        Alert.alert("Food item updated!")
        getListOfFood()
    }
    catch(error)
    {
        console.error("Could not edit item", error)
    }
}
