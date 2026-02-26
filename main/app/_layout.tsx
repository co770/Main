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
     <View style={{width:270,borderRadius:8,alignItems:'center',borderWidth:1,borderColor:'white',flexDirection:'row'}}><Ionicons name='search' size={20}  color="white" style={{marginLeft:10}}/><TextInput/></View>
     ),
     headerRight:()=>(
     <View><Ionicons name='home' size={20} color="white"/></View>
     )
   }}
  
  >
    
  </Stack>;
}
