import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'


function App(){
  return(
    <View style={{width:'100%',height:'100%',backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white'}}>hello welcome to react</Text>
    <TouchableOpacity style={{backgroundColor:'red',borderRadius:8}}><Text style={{color:'white',width:150,height:50,alignItems:'center',justifyContent:'center',marginTop:10}}>Hello</Text></TouchableOpacity>
    </View>
    )
}

export default App