import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {ChevronDownIcon, UserIcon} from "react-native-heroicons/outline";





function HomeScreen() {

  const navigation = useNavigation(); 
  
  useLayoutEffect(()=>navigation.setOptions(
    {
      headerShown: false,
    }
  ),[[]])

    return (
     <SafeAreaView className = "bg-white pt-5">
     <View className= "flex-row pb-3 items-center mx-4 space-x-2">
            <Image
              source={require('../image/image.jpg')}
              className= "h-7 w-7 bg-gray-300 rounded-full p-4"
            />   
            <View className= "flex-1">
            <Text className="font-bold text-gray-400 p-4 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20} color ="#00CCBB"/></Text>
            </View>
          <UserIcon size={35} color ="#00CCBB"/>
        </View>  
     </SafeAreaView>
    );
  }



  export default HomeScreen;