import React from 'react'
import { View,Text,Button } from 'react-native-web';

export default function reviewDetails({navigation}) {
    const funcNav=()=>{
        navigation.goBack()
    }
  return (
      <View>
          <Text>{navigation.getParam('name')}</Text>
          <Text>{navigation.getParam('tel')}</Text>
          <Text>{navigation.getParam('email')}</Text>
<Button title='go to home' onPress={funcNav}/>

      </View>
  )
}
