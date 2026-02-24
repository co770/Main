import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { View, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function CustomDrawerContent() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Custom button */}
      <TouchableOpacity
        style={{ backgroundColor: 'red', padding: 10, marginBottom: 20 }}
        onPress={() => {}} // does nothing
      >
        <Text style={{ color: 'white' }}>Go to Home</Text>
      </TouchableOpacity>

      {/* Another custom button */}
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, marginBottom: 20 }}
        onPress={() => {}} // does nothing
      >
        <Text style={{ color: 'white' }}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent} // pass the custom drawer here
        screenOptions={{
          drawerActiveTintColor: 'red',
          swipeEnabled: true,
        }}
      />
    </GestureHandlerRootView>
  );
}