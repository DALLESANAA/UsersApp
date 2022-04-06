import React, {useState} from 'react'
import { Button,StyleSheet, View, Text , ScrollView, FlatList} from 'react-native';
import { TextInput } from 'react-native-web';
import Header from './header';
import { TouchableOpacity } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function Home({navigation}) {
    const [users,setUsers]=useState([
        {id:1,name:"ileas elgalta", tel:"0615615636", email:"ileaselgalta@gmail.com"},
        {id:2,name:"simo lkamel", tel:"069874655", email:"lkaml@gmail.com"},
        {id:3,name:"ahmed", tel:"062221588", email:"ahmed@gmail.com"},
        {id:4,name:"ileas elgalta", tel:"0615615636", email:"ileaselgalta@gmail.com"},
        {id:5,name:"simo lkamel", tel:"069874655", email:"lkaml@gmail.com"},
        {id:6,name:"ahmed", tel:"062221588", email:"ahmed@gmail.com"},
        {id:7,name:"ileas elgalta", tel:"0615615636", email:"ileaselgalta@gmail.com"},
        {id:8,name:"simo lkamel", tel:"069874655", email:"lkaml@gmail.com"},
        {id:9,name:"ahmed", tel:"062221588", email:"ahmed@gmail.com"}
    ])
    const deleteItems=(id)=>{
       console.log(id)
       setUsers((person)=>{
        return person.filter(item=>item.id != id)
       })
    }

    const funcNav=()=>{
    }
  return (
    <View style={styles.container}>
      <Header/>
      
      <View style={styles.content}>
     <FlatList
     numColumns={2}
     keyExtractor={(item)=>item.id}
     data={users} 
     renderItem={({item}) => (
       <TouchableOpacity onPress={()=>navigation.navigate('reviewDetails',item)}>
      <View style={styles.item} >
      <Text >{item.name}</Text>
      
      <Button title='Delete' onPress={()=>deleteItems(item.id)}/>
      <Text>-------------------------------------------------------</Text>
    </View>   
     
       </TouchableOpacity>
       
       
     )} />

     {/*<ScrollView>
     {users.map((user)=>(
       
         <View style={styles.item}  key={user.id}>
           <Text >{user.name}</Text>
           <Text>{user.tel}</Text>
           <Text>{user.email}</Text>
           <Text>-------------------------------------------------------</Text>
         </View>
       
     ))}
     </ScrollView>
     */}
     </View>
   </View>
   
  
  )
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      paddingTop:40,
      paddingHorizontal:20
    },
    item:{
      marginTop:24,
      padding:30,
      backgroundColor:'pink',
      fontSize:24
    }
  })
