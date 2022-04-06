import React, {useEffect,useState} from 'react'
import { View,Text,Button,StyleSheet,FlatList , Image} from 'react-native';

export default function reviewDetails({navigation}) {
    const funcNav=()=>{
        navigation.goBack()
    }
    const [folows,setFolowers]=useState([])
        const getFolowers = () => {
        fetch('https://api.github.com/users/'+navigation.getParam('login'))
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                setFolowers(response);
            });
    };
       useEffect(() => {
        getFolowers();
        }, []);

  
  return (
      
      <View>

 <View style={styles.item}>
         <Image style={{height:300 , width:300}} source={{ uri:navigation.getParam('avatar_url') }}/>
          <Text>{navigation.getParam('login')}</Text>
          <Text>{navigation.getParam('type')}</Text>
         
         <Text> {folows.followers}</Text>
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