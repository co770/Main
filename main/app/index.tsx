import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { width } = Dimensions.get('window');

// 1. Placeholder Screens
const HomeScreen = () => (
  <View style={styles.screen}><Text>Home Feed</Text></View>
);
const ProfileScreen = () => (
  <View style={styles.screen}><Text>Profile Screen</Text></View>
);

// 2. Custom Floating Tab Bar Component
function FloatingTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.floatingBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity 
              key={route.key} 
              onPress={onPress} 
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <Text style={[styles.label, { color: isFocused ? '#673ab7' : '#888' }]}>
                {route.name}
              </Text>
              {isFocused && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

// 3. Main App
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <FloatingTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  tabContainer: {
    position: 'absolute',
    bottom: 30, // Distance from bottom of screen
    width: width,
    alignItems: 'center',
  },
  floatingBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: width * 0.85, // Width of the floating bar
    height: 65,
    borderRadius: 35, // Rounded corners
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Elevation for Android
    elevation: 10,
  },
  tabButton: { alignItems: 'center', flex: 1 },
  label: { fontSize: 12, fontWeight: 'bold' },
  indicator: {
    marginTop: 4,
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: '#673ab7',
  }
});
