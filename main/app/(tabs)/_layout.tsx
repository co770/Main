import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/images/icon.png'
export default function Layout() {
  return(
    <Stack screenOptions={{
      headerRight:()=>(
      <View style={{flexDirection:'row',gap:15,paddingRight:15,color:'white'}}><Text>hello</Text><Text>hi</Text></View>
      )
    }}/>
    
    )
}