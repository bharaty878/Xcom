import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pay = () => {
  return (
    <View>
      <Text style={{color:"white",backgroundColor:"black",fontSize:70}}>UPI</Text>
      <Text style={styles.txt}>Phone pe</Text>
      <Text style={styles.txt}>Google Pay</Text>
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({
    txt:{
        backgroundColor:"silver",
        color:"blue",
        fontSize:40

    }
})