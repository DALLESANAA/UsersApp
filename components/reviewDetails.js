import React from 'react'
import { View,Text,Button,StyleSheet } from 'react-native';

export default function reviewDetails({navigation}) {
    const funcNav=()=>{
        navigation.goBack()
    }
  return (
      <View>
 <View style={styles.item}>
          <Text>{navigation.getParam('name')}</Text>
          <Text>{navigation.getParam('tel')}</Text>
          <Text>{navigation.getParam('email')}</Text>
      </View>
          <Button title='go to home' onPress={funcNav}/>
      </View>
     

  )
}
const styles=StyleSheet.create({
    item:{
        marginTop:24,
        padding:30,
        backgroundColor:'pink',
        fontSize:24
        }
})