import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      
          <Drawer screenOptions={{
      drawerActiveTintColor:'red',
      swipeEnabled:true
    }}/>
    </GestureHandlerRootView>

      
      )}