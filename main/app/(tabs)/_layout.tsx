import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'My App',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#1E40AF' },
        headerTintColor: 'white',
        animation: 'slide_from_right',
        gestureEnabled: true,
        cardStyle: { backgroundColor: '#F3F4F6' },
        presentation: 'card',
      }}
    />
  );
}