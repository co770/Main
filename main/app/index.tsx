import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  runOnJS 
} from 'react-native-reanimated';
// Note: We use useNavigation from expo-router to handle the transition
import { useRouter, useNavigation } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const scale = useSharedValue(0.1); 

  // Sets the title for this specific screen within the Layout's Stack
  React.useEffect(() => {
    navigation.setOptions({ title: 'Home', headerShown: false });
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: 0,
    height: 0,
    borderRadius: 50,
    backgroundColor: 'tomato',
    transform: [{ scale: scale.value }],
    position: 'absolute',
    top: height / 2 - 50,
    left: width / 2 - 50,
  }));

  const expandCircle = () => {
    scale.value = withTiming(20, { duration: 600 }, () => {
      // Navigate to your next file (e.g., app/NextScreen.tsx)
      // runOnJS is required to call functions from the UI thread
      runOnJS(router.push)('/NextScreen');
      
      // Reset scale so it's ready when you come back
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
