import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function CustomTabBar() {
  const tabs = [
    { name: 'Home', icon: 'home-outline' },
    { name: 'Search', icon: 'search-outline' },
    { name: 'Profile', icon: 'person-outline' },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const indicator = useRef(new Animated.Value(0)).current;

  const handleTabPress = (index) => {
    setActiveTab(index);
    Animated.spring(indicator, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  const translateX = indicator.interpolate({
    inputRange: [0, tabs.length - 1],
    outputRange: [0, (width / tabs.length) * (tabs.length - 1)],
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Content */}
      <View style={styles.content}>
        <Text style={{ fontSize: 24 }}>{tabs[activeTab].name} Screen</Text>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={() => handleTabPress(index)}
          >
            <Ionicons
              name={tab.icon}
              size={24}
              color={activeTab === index ? '#4caf50' : '#888'}
            />
            <Text
              style={{
                color: activeTab === index ? '#4caf50' : '#888',
                fontWeight: activeTab === index ? 'bold' : 'normal',
              }}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Animated Indicator */}
        <Animated.View
          style={[
            styles.indicator,
            { width: width / tabs.length, transform: [{ translateX }] },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    position: 'relative',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    height: 3,
    backgroundColor: '#4caf50',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});