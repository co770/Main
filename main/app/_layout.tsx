import { Stack } from "expo-router";
import {View} from 'react-native'
export default function RootLayout() {
  return <Stack
   screenOptions={{
     headerRight:()=>(
     <View><Text style={{color:'white'}}>Honda</Text></View>
     )
   }}
  
  >
    
  </Stack>;
}
