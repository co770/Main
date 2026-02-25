import { Stack } from "expo-router";
import {View,Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
export default function RootLayout() {
  return <Stack
   screenOptions={{
     headerStyle:{
       backgroundColor:'black',
       elevation:5
     },
     headerRight:()=>(
     <View><Ionicons name='home' size={22} color="white"/></View>
     )
   }}
  
  >
    
  </Stack>;
}
