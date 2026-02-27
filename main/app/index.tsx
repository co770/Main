import React from 'react'
import {Text,View,Button} from 'react-native'
import Animated,{useSharedValue,withTiming} from 'react-native-reanimated'


export default function Index(){
  const width=useSharedValue(150)
  const height=useSharedValue(150)
  
  
  
const StartAnimation=()=>{
  width.value=withTiming(Math.floor(Math.random()*300)+100)
  height.value=withTiming(Math.floor(Math.random()*300)+100)
}
  
  return(
    <>
      <View>
        <Button onPress={StartAnimation}>clickme</Button>
        <Animated.View style={{width:width,height:height,backgroundColor:'blue'}}>
          </Animated.View>
      </View>
    </>
    
    
    )
}