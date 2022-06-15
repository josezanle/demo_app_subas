import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FavoritosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  )
}

export default FavoritosScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white"
  }
})

