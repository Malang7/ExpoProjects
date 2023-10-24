import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import {ChevronDwnIcon, UserIcon, AdjustmentsVerticalIcon,MagnifyingGlassIcon} from "react-native-heroicons/outline";
import ResturantCards from './ResturantCards';

const FeatureRows = ({titel, description, id}) => {
  return (
    <View>
      <View className = "mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">{titel}</Text>
      <ArrowRightIcon size={20} color ="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15,}} 
      showsHorizontalScrollIndicator={false}
      className="pt-4"
       >
{/** resturant cards */}
          <ResturantCards
          id={1}
          image={require("../image/image.jpg")}
          tittel="Nado's"
          rating={2}
          genre="sushi"
          address="grossenveien 52"
        
        />
               <ResturantCards
          id={1}
          image={require("../image/image.jpg")}
          tittel="Nado's"
          rating={2}
          genre="sushi"
          address="grossenveien 52"
        
        />
               <ResturantCards
          id={1}
          image={require("../image/image.jpg")}
          tittel="Nado's"
          rating={2}
          genre="sushi"
          address="grossenveien 52"
        
        />
               <ResturantCards
          id={1}
          image={require("../image/image.jpg")}
          tittel="Nado's"
          rating={2}
          genre="sushi"
          address="grossenveien 52"
        
        />
      </ScrollView>
   
    </View>
  )
}

export default FeatureRows