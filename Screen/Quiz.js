import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quiz = () => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text>Can write any Question here?</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity>
            <Text>A</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>B</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>C</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>D</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
        <TouchableOpacity>
        <Text>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text>Next</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding:12,
        height: '100%',
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex:1,
    },
    bottom: {
        marginVertical: 16,
        marginBottom: 12,
        justifyContent: 'space-between',
        flexDirection:'row',
    }
})