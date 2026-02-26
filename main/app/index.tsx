import { Text, View,TouchableOpacity,TextInput,Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Link} from 'expo-router'
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        
        alignItems: "center",
      }}
    >
    <Image source={require('../assets/images/react-logo.png')} style={{width:150,height:150,borderRadius:75,marginTop:150}}/>
    
    
    
    
    <View style={{flexDirection:'row',width:300,gap:5,borderBottomWidth:1,borderBottomColor:'brown',marginBottom:20,alignItems:'center'}}>   
    
    <Ionicons name='person' size={21} color="black"  style={{marginLeft:3}}/>
    <TextInput placeholder="Username" style={{height:40,width:230}}/>
   
    </View>
    
    
    
    
    
    <Link href="modal" style={{color:'black'}}>Modal</Link><Link href="modal" style={{
  color: 'white',
  backgroundColor: '#2563eb',
  padding: 10,
  borderRadius: 8,
  marginVertical: 10,
  textAlign: 'center'
}}>Open Modal</Link>
   
    
    
    </View>
  );
}
