import React from 'react';
import { Stack } from 'expo-router';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <View style={styles.header}>
            {/* Left: Logo */}
            <Image
              source={{ uri: 'https://placekitten.com/40/40' }}
              style={styles.logo}
            />

            {/* Center: Search Bar */}
            <TextInput
              placeholder="Search..."
              style={styles.searchBar}
            />

            {/* Right: Icons */}
            <View style={styles.icons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="notifications" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="person-circle" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#1E40AF',
  },
  logo: { width: 40, height: 40, borderRadius: 20 },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 40,
  },
  icons: { flexDirection: 'row' },
  iconButton: { marginLeft: 10 },
});