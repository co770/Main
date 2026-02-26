// App.js
import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const scale = useSharedValue(0.1); // small circle

  const animatedStyle = useAnimatedStyle(() => ({
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'tomato',
    transform: [{ scale: scale.value }],
    position: 'absolute',
    top: height / 2 - 50,
    left: width / 2 - 50,
  }));

  const expandCircle = () => {
    scale.value = withTiming(20, { duration: 600 }, () => {
      // Navigate after animation completes
      runOnJS(navigation.navigate)('NextScreen');
      // Optional: reset scale if you come back
      scale.value = 0.1;
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle} />
      <Button title="Go Next" onPress={expandCircle} />
    </View>
  );
}

function NextScreen() {
  return (
    <View style={[styles.container, { backgroundColor: '#4caf50' }]}>
      <Button title="You are on Next Screen" onPress={() => {}} />
    </View>
  );
}

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NextScreen" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});