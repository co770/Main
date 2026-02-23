import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/images/icon.png'
export default function Layout() {
  return(
    <Stack screenOptions={{
      headerRight:()=>(
      <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingRight:15}}><Text>hello</Text><Text>hi</Text></View>
      )
    }}/>
    
    )
}