import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCards = ({imageSource, tittel}) => {
  return (
    <TouchableOpacity className="relative mr-2">
    <Image 
        source={imageSource}    
        className= "w-28 h-28 rounded"
    />

      <Text className = "absolute bottom-1 text-white font-bold" >CategoryCards {tittel}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCards