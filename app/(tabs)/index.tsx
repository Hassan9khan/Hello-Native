import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: "cyan",
      alignItems: "center",
      padding: 10,
    }}>
      <Text style={{
        fontSize: 30,
      }}>Hello World React </Text>
    </SafeAreaView>
  )
}

export default index