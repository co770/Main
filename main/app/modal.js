import { Text, View,TouchableOpacity,TextInput,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Modal() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'red'
        alignItems: "center",
      }}
    >

    
    
    
    <View style={{flexDirection:'row',width:300,gap:5,borderBottomWidth:1,borderBottomColor:'brown',marginBottom:20,alignItems:'center'}}>   
    
    <Ionicons name='person' size={21} color="black"  style={{marginLeft:3}}/>
    <TextInput placeholder="Username" style={{height:40,width:230}}/>
   
    </View>
    
    
    
    
    
    
    <TouchableOpacity style={{backgroundColor:'#0f172a',width:280,height:50,color:'white',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
    
    </View>
  );
}
