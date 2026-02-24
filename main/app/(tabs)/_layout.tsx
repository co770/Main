import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

function CustomDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom header with image */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://placekitten.com/100/100' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Tony Stark</Text>
      </View>

      {/* Keep automatic drawer items */}
      <DrawerItemList {...props} />

      {/* Optional: extra footer */}
      <View style={styles.footer}>
        <Text>Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveTintColor: 'red',
          swipeEnabled: true,
        }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});