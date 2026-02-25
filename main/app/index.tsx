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
    <View style={{flexDirection:'row',width:300,justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'black',marginBottom:20,alignItems:'center'}}>
    <TextInput placeholder="Username" style={{height:40,width:230}}/>
    <Ionicons name='home' size={24} color="black"  style={{marginRight:20}}/>
    </View>
    <TouchableOpacity style={{backgroundColor:'#0f172a',width:280,height:50,color:'white',justifyContent:'center',alignItems:'center',borderRadius:8}}><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
    
    </View>
  );
}
