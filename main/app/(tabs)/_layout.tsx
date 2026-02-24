import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {DrawerContentComponentProps,DrawerItemList,DrawerContentScrollView} from 'react-navigation/drawer'
function Custom(props:DrawerContentComponentProps){
  return(
    <DrawerContentScrollView {...props}>
      <View>
        <TouchableOpacity style={{backgroundColor:'red'}}>hello</TouchableOpacity>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
    )
}



export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      
          <Drawer
          drawerContent={Custom}
          screenOptions={{
      drawerActiveTintColor:'red',
      swipeEnabled:true
    }}/>
    </GestureHandlerRootView>

      
      )}