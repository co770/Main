import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'


function App(){
  return(
    <View style={{width:'100%',height:'100%',backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white'}}>hello welcome to react</Text>
    <TouchableOpacity style={{backgroundColor:'red',borderRadius:8}}><Text style={{color:'white'}}>Hello</Text></TouchableOpacity>
    </View>
    )
}

export default App