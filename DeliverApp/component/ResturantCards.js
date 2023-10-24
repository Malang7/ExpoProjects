import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'


const ResturantCards = (
    {
      id,
    image,
    tittel,
    rating,
    genre,
    address

    }

) => {
  return (
    <TouchableOpacity className ="bg-white mr-3 shadow">
   <Image 
        source={image}
        className= "w-64  h-36 rounded-sm"
    />
    <View className= "px-3 pb-4">
        <Text className= 'font-bold text-lg pt-2'>{tittel}</Text>
        <View className="flex-row items-center">
        <StarIcon size={20} opacity={0.5} color="green"/>
        <Text className= "text-blue-300 pl-1">{rating}</Text>
        <Text className="pl-1 text-gray-400 text-xs">{genre}</Text>
    </View>

    <View className= "flex-row items-center space-x-1">
      <MapPinIcon color="gray" size={22} opacity={0.4}/>
      <Text className="pl-1 text-gray-500 text-xs">Nearby.{address}</Text>
    </View>

    </View>
    
    
      </TouchableOpacity>
  )
}

export default ResturantCards