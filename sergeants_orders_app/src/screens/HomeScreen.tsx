import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FoodCard from '../components/FoodCard'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#121212"}}>
      <FoodCard/>
    </SafeAreaView>
  )
}

export default HomeScreen