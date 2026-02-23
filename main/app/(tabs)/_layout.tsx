import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => (
          <Image
            source={{ uri: 'https://placekitten.com/40/40' }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 15 }}>
            <TouchableOpacity style={{ marginHorizontal: 5 }}>
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 5 }}>
              <Ionicons name="notifications" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ),
        headerStyle: { backgroundColor: '#1E40AF', height: 80 },
      }}
    />
  );
}