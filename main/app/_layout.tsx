import { Stack } from "expo-router";
import {View,Text,TextInput} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export default function RootLayout() {
  return <Stack
   screenOptions={{
     headerStyle:{
       backgroundColor:'',
       elevation:5,
     },
     headerTitle:()=>(
     <View></View>
     ),
     headerRight:()=>(
     <View><Ionicons name='home' size={20} color="white"/></View>
     )
   }}
  
  >
    
  </Stack>;
}
