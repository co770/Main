import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import Logo from '../../assets/images/icon.png'
import {Link} from 'expo-router'
function App(){
  return(
    <View style={{width:'100%',height:'100%',backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
      <Image source={Logo} style={{width:'40%'}}/>
      <Text style={{color:'white'}}>hello welcome to react</Text>
    <TouchableOpacity style={{backgroundColor:'red',borderRadius:8,alignItems:'center',justifyContent:'center',marginTop:10,width:150,height:50}}><Text style={{color:'white'}}>Hello</Text></TouchableOpacity>
    <Link href="/create">About</Link>
    </View>
    )
}

export default App