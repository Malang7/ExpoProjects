import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCards from './CategoryCards'
const Categores = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal:15,
       paddingTop:10
       }} 
    horizontal 
    showsHorizontalScrollIndicator={false}>

    {/**categoriz*/}
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />
    <CategoryCards imageSource={require("../image/image.jpg")} tittel={"test22222222 1"} />



      <Text>ca </Text>
    </ScrollView>
  )
}

export default Categores