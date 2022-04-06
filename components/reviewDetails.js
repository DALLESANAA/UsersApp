import React, {useEffect,useState} from 'react'
import { View,Text,Button,StyleSheet,FlatList } from 'react-native';

export default function reviewDetails({navigation}) {
    const funcNav=()=>{
        navigation.goBack()
    }
    const [folowers,setFolowers]=useState([])
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
          <Text>{navigation.getParam('login')}</Text>
          <Text>{navigation.getParam('type')}</Text>
          <Text>{navigation.getParam('url')}</Text>
          <FlatList
     keyExtractor={(item)=>item.id}
     data={folowers} 
     renderItem={({item}) => (
       <TouchableOpacity>
      <Text >{item.followers}</Text>
       </TouchableOpacity>
       
       
     )} />
          
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