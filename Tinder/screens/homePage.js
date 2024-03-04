import {  Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';



export default function HomeScreen() {

    const navigation = useNavigation ();

  return (
    <SafeAreaView>
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Open up App.js to start working on your app!</Text>
        <Button title='click me' onPress={()=>navigation.navigate("chat")}/>
      </View>
    </SafeAreaView>
  );
}