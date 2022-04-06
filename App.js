import  React,{useState}  from 'react';
import { Button,StyleSheet, View, Text , ScrollView, FlatList} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Header from './components/header';
import Home from './components/home';
import Navigator from './routes/homeStack'




function App() {
  const [name,setName]=useState('ileas')
  const updateName= () =>{
    setName('ileas elgalta')
  }
  
  return (
    <Navigator/>
   
     );
       }


export default App;