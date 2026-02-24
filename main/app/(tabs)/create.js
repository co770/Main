import {Link} from 'expo-router'
import {View,Text} from 'react-native'
import React from 'react';

export default function Create() {
  return (
  <View><Text>Create</Text>
  <Link href='/' style={{color:'white'}}>create</Link>
  </View>
  );
}