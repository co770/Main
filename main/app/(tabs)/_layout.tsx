import React from 'react';
import { Stack } from 'expo-router';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack
    screenOption={{
      headerRight:()=>(
      <View>
        <Ionicons name="home" size={24} color="black"/>
      </View>
      )
    }}
      />
      
      )}