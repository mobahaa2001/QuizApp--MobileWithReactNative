import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../Components/Title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={ require('./home.png')} style={styles.img}/>
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    img:{
        height: 300,
        width:300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems:'center'
    }

})