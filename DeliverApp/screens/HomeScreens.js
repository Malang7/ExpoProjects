import * as React from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon,MagnifyingGlassIcon} from "react-native-heroicons/outline";
import Categores from '../component/categores';


function HomeScreen() {

  const navigation = useNavigation(); 
  

  useLayoutEffect(()=>navigation.setOptions(
    {
      headerShown: false,
    }
  ),[[]])

    return (
     <SafeAreaView className = "bg-white">
     
          <View>
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
        {/** search */}

          <View className="flex-row items-center space-x-0 px-1 pb-4">
            <View className= "flex-row flex-1 bg-gray-200 items-center c pb=2 mx-4">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput 
                   placeholder='search for resturant'
                   keyboardType='defualt'

            /> 
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB"/>
          </View>

          {/*the body of the home view*/}

          <ScrollView className="bg-gray-100"
          contentContainerStyle={{paddingBottom: 100,}}
          >
          {/** categoriez */}

          <Categores/>

          {/** features rows */}

          </ScrollView>




          </View>
       
     </SafeAreaView>
    );
  }



  export default HomeScreen;