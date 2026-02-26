import { Text, View,TouchableOpacity,TextInput,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        
        alignItems: "center",
      }}
    >
    <Image source={require('../assets/images/react-logo.png')} style={{width:150,height:150,borderRadius:75}}/>
    
    
    
    
    <View style={{flexDirection:'row',width:300,gap:5,orderBottomWidth:1,borderBottomColor:'black',marginBottom:20,alignItems:'center'}}>   
    
    <Ionicons name='person' size={22} color="orange"  style={{marginLeft:3}}/>
    <TextInput placeholder="Username" style={{height:40,width:230}}/>
   
    </View>
    
    
    
    
    
    
    <TouchableOpacity style={{backgroundColor:'#0f172a',width:280,height:50,color:'white',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
    
    </View>
  );
}
