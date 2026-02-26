import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// 1. The Custom Bar Component
function MySimpleTabBar({ state, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 60, backgroundColor: 'blue' }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ color: isFocused ? 'blue' : 'black' }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// 2. The Main Navigator
export default function Index() {
  return (
    <Tab.Navigator tabBar={(props) => <MySimpleTabBar {...props} />}>
      <Tab.Screen name="Home" component={() => <View><Text>Home</Text></View>} />
      <Tab.Screen name="Settings" component={() => <View><Text>Settings</Text></View>} />
    </Tab.Navigator>
  );
}
