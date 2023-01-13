import { View, Text } from 'react-native'
import React from 'react'

const BottomScreen2 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigation.openDrawer()}>BottomScreen2</Text>
    </View>
  )
}

export default BottomScreen2