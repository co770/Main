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
   }}
  >
  
  <Stack.Screen
  name="ModalScreen"
  component={ModalScreen}
  options={{
    presentation: 'modal',
    animation: 'slide_from_bottom', // forces bottom-up animation on Android
  }}
/>

  </Stack>;
}
