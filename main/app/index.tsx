import { Text, View,TouchOpacity,TextInput,Image } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Image source={require('../assets/images/react-logo.png')} style={{width:150,height:150,borderRadius:75}}/>
    <TextInput/>
    <TextInput/>
    <TextInput/>
    <TouchOpacity style={{backgroundColor:'#0f172a',width:200,height:50,color:'white',justifyContent:'center',alignItems:'center'}}><Text>Login</Text></TouchOpacity>
    
    </View>
  );
}
