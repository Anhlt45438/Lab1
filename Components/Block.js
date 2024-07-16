import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({ title, children }) => {
  return (
    <View style={{ backgroundColor: 'white', borderRadius: 7, elevation: 10, height: 'auto', width: '100%', borderColor: 'gray', borderWidth: 0.5, margin: 15, paddingVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', marginVertical: 10 }}>{title}</Text>
      {children}
    </View>
  )
}

export default Block

const styles = StyleSheet.create({})