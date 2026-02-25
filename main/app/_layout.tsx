import { Stack } from "expo-router";
import {View,Text} from 'react-native'
export default function RootLayout() {
  return <Stack
   screenOptions={{
     headerStyle:{
       backgroundColor:'black',
       elevation:5
     },
     headerRight:()=>(
     <View><Text style={{color:'white'}}>Honda</Text></View>
     )
   }}
  
  >
    
  </Stack>;
}
