import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList,Button } from 'react-native';
import Header from '../components/header';
import Card from '../components/userCard';


const HomeScreen = ({navigation}) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = () => {
        fetch('https://api.github.com/users')
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                setUsers(response);
            });
    };
    

    
    return (
        <View style={styles.container}>
            <Header label="Users App" />
            <StatusBar barStyle="dark-content" />

            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                    <View>
                        <Card info={item} /> 

                        <Button title="Voir les détails" 
                        
                        onPress={() => navigation.navigate('Details', {
                            userlogin:item.login,
                            avatar:item.avatar_url,
                        })}
                        
                        />
                   </View>
                    );
                }}
                keyExtractor={(user) => user.id.toString()}
                showsVerticalScrollIndicator={false}
                />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    buttonStyle:{
       backgroundColor:'#ffffff',
    }
    
});

export default HomeScreen;