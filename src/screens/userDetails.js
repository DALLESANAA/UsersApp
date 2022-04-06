import React, {useEffect,useState} from 'react'
import { StyleSheet, Text, View, Button,Image,FlatList  } from 'react-native';

const UserDetails = ({ route,navigation })  => {
    
    const {userlogin,avatar} = route.params;
    
    const [folowers,setFolowers]=useState([])
        const getFolowers = () => {
        fetch('https://api.github.com/users/'+userlogin)
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
            <Text style={styles.titleStyle} >User Details Screen</Text>
            <Text style={styles.infoStyle}>Name: {userlogin}</Text>

            <Text >Foloowers:{folowers.followers}</Text>


            <Image 
             source={{uri:avatar}}
             style={styles.imageStyle}
            />
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
};
const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
        alignSelf:'center'
    },
    titleStyle:{
        fontSize: 24,
        fontWeight: '700',
        textAlign:'center'
    },
    infoStyle:{
        fontSize: 16,
        fontWeight: '300',
        marginLeft:20
    }
    
});
export default UserDetails;